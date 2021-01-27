import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, 
  monkeyPatchChartJsTooltip } from 'ng2-charts';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent implements OnInit {
  
  @Input() public tipo: ChartType;
  
  
  
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  

  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    console.log( this.tipo );
  }

}
