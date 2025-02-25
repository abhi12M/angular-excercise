import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GraphComponent } from '../../shared-components/graph/graph.component';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../../services/api/api.service';
import { Store } from '@ngrx/store';
import { setChartColor, setChartType } from '../../store/chart.actions';
import { selectChartColor, selectChartType } from '../../store/chart.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    GraphComponent,
    MatButtonModule,
  ],
})
export class DashboardComponent {
  apiService = inject(ApiService);
  userName: string = '';
  chartType = new FormControl('');
  options: string[] = ['bar', 'line', 'column'];
  filteredOptions: Observable<string[]> | undefined;
  color = new FormControl('');
  chartData: any;

  constructor(private router: Router, private store: Store) {
    this.store.select(selectChartType).subscribe(value => this.chartType.setValue(value, { emitEvent: false }));
    this.store.select(selectChartColor).subscribe(value => this.color.setValue(value, { emitEvent: false }));
    this.chartData = this.apiService.getData({ type: this.chartType.value, colors: this.color.value });
  }

  ngOnInit() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      this.userName = JSON.parse(userData).userName;
    }
    this.filteredOptions = this.chartType.valueChanges.pipe(
      startWith(''),
      map(value => (value && !this.options.includes(value) ? this._filter(value) : this.options))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  chartTypeChanged() {
    this.chartData = { ...this.chartData, chartType: this.chartType.value };
    this.filteredOptions = new Observable((observer) => {
      observer.next(this.options);
    });
    this.store.dispatch(setChartType({ chartType: this.chartType.value }));
  }

  logout() {
    localStorage.removeItem('userData');
    this.router.navigate(['login']);
  }

  colorChange() {
    this.chartData = { ...this.chartData, colors: this.color.value };
    this.store.dispatch(setChartColor({ color: this.color.value }));
  }
}
