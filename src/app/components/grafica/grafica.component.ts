import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
]
})
export class GraficaComponent implements OnInit, AfterViewInit {
  
  @ViewChild('mycanvas') myca: ElementRef;

  @Input() public tipo: ChartType;
  @Input() public labels_g:any;
  @Input() public data_g:any;
  @Input() public legend_g:boolean;
  @Input() public plugins_g: [];
  
  public metaRest: number = 0;

  public options: ChartOptions = {
    responsive: true,
  };
  
  constructor() { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(){
    if( this.tipo == 'doughnut' ){
      
      let ctx = this.myca.nativeElement.getContext("2d");
      
      this.options = {
          hover: {
            animationDuration: 0, 
        },
        animation: { 
          onComplete: ( ) => {
            this.doit(ctx);
          }
        }
      }
    }
  }

  doit( ctx:any ) {
    let width = this.myca.nativeElement.clientWidth;
    let height = this.myca.nativeElement.clientHeight;
  
    let fontSize = (height / 180).toFixed(2);
    ctx.font = fontSize + "em Verdana";
    ctx.fillStyle = "dark";
    
    const mes = 7200; // services
    let juntado = this.data_g[0]/mes;

    let text = ` ${ juntado } ${ juntado === 1 ? 'mes' : 'meses' }`,
    textX = Math.round( ( width - ctx.measureText(text).width) / 2),
    textY = height / 1.9;
    
    ctx.fillText(text, textX, textY);
    ctx.restore();
  }

}
