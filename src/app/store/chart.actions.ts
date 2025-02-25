import { createAction, props } from '@ngrx/store';

export const setChartType = createAction('[Chart] Set Chart Type', props<{ chartType: string | null }>());
export const setChartColor = createAction('[Chart] Set Chart Color', props<{ color: string | null }>());
