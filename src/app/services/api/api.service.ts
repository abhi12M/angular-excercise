import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getData(options: any) {
    return {
      chartType: options?.type,
      colors: options?.colors,
      title: "Company Performance Metrics",
      xAxis: {
        categories: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"],
        title: "Quarterly Performance",
        labels: {}
      },
      yAxis: {
        title: "Value"
      },
      series: [
        {
          name: "Revenue ($M)",
          data: [45, 60, 75, 90]
        },
        {
          name: "Profit ($M)",
          data: [10, 15, 20, 30]
        },
        {
          name: "Customer Growth (K)",
          data: [5, 10, 20, 35]
        },
        {
          name: "Active Users (M)",
          data: [1.2, 1.5, 1.8, 2.2]
        }
      ],
    }
  }
}
