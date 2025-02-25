import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [
    HighchartsChartModule,
    CommonModule
  ],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent {
  Highcharts: typeof Highcharts = Highcharts;

  @Input() data: any = {};

  chartOptions: Highcharts.Options = {}

  ngOnChanges() {
    this.chartOptions = {
      credits: {
        enabled: false
      },
      colors: [
        this.data.colors
      ],
      chart: {
        type: this.data?.chartType,
        zooming: {
          type: 'xy',
          resetButton: {
            position: {
              align: 'right',
              verticalAlign: 'top'
            }
          }
        },
        panning: {
          enabled: true,
          type: 'xy'
        },
        panKey: 'shift'
      },
      title: {
        text: this.data?.title,
      },
      subtitle: {
        text: 'Click and drag to zoom in. Hold down shift key to pan.'
      },
      legend: {
        enabled: false
      },
      xAxis: {
        categories: this.data?.xAxis?.categories,
        crosshair: true,
        title: {
          text: this.data?.xAxis?.title
        },
        labels: this.data?.xAxis?.labels || {}
      },
      yAxis: {
        title: {
          text: this.data?.yAxis?.title,
        }
      },
      plotOptions: {
        series: {
          dataLabels: {
            inside: true
          },
        }
      },
      series: this.data?.series,
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              enabled: false
            }
          }
        }]
      }
    };
  }
}
