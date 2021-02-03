import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: []
})
export class GraficaComponent implements OnInit {
  
  @Input() public tipo: ChartType;
  @Input() public labels_g:any;
  @Input() public data_g:any;
  @Input() public legend_g:boolean;
  @Input() public plugins_g: [];
  
  public options: ChartOptions = {
    responsive: true,
  };

  constructor() { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {    
  }

}
