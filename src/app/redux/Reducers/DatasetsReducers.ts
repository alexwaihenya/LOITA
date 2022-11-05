
import {
    createFeatureSelector,
    createReducer,
    createSelector,
    on,
} from '@ngrx/store';
import { IResponse } from 'src/app/interface/data';
import * as Actions from '../Actions/datasetsActions'; 

export interface DatasetState {
    datasets: IResponse[];
    error: string;
    loadMessage:string;
  }

  const initialState: DatasetState = {
    datasets: [],
    error: '',
    loadMessage:''
  };

const getDataSetFeatureState = createFeatureSelector<DatasetState>('dataset');
  
export const getDatasets = createSelector(
    getDataSetFeatureState,
    (state) => state.datasets
);
  
export const DatasetReducer = createReducer(
    initialState,
    on(Actions.LoadDatasetsSuccess, (state, action): DatasetState => {
        return { ...state, datasets: action.dataset };
      }),
      on(Actions.LoadDatasetsFailure, (state, action): DatasetState => {
        return { ...state, error: action.error };
      })
)