import { createAction, props } from '@ngrx/store';
import { Idata, IResponse } from 'src/app/interface/data';

export const SelectedId = createAction('SelectedId', props<{ date: number }>());

export const LoadDatasets = createAction('LoadDatasets');
export const LoadDatasetsSuccess = createAction(
  'LoadDatasetsSuccess',
  props<{ dataset: IResponse[] }>()
);
export const LoadDatasetsFailure = createAction(
  'LoadDatasetsFailure',
  props<{ error: string }>()
);