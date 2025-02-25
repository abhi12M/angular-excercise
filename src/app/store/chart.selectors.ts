import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ChartState } from './chart.reducer';

export const selectChartState = createFeatureSelector<ChartState>('chart');

export const selectChartType = createSelector(selectChartState, (state) => state.chartType);
export const selectChartColor = createSelector(selectChartState, (state) => state.color);
