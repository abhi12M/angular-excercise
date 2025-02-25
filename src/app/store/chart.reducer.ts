import { createReducer, on } from '@ngrx/store';
import { setChartType, setChartColor } from './chart.actions';

export interface ChartState {
  chartType: string | null;
  color: string | null;
}

const initialState: ChartState = {
  chartType: 'bar',
  color: '#20cf9b',
};

export const chartReducer = createReducer(
  initialState,
  on(setChartType, (state, { chartType }) => ({ ...state, chartType })),
  on(setChartColor, (state, { color }) => ({ ...state, color }))
);
