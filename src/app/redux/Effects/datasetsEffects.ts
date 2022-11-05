import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map, of } from 'rxjs';
import { IResponse } from 'src/app/interface/data';
import { QuandlService } from 'src/app/services/quandl.service';
import * as DataSetsActions from '../Actions/datasetsActions';

@Injectable({
  providedIn: 'root',
})
export class DatasetsEffectsService {
  constructor(
    private actions: Actions,
    private store: Store,
    private quadlService: QuandlService
  ) {}
}

// loadDataset = createEffect(() => {
//   return this.actions.pipe(
//     ofType(DataSetsActions.LoadDatasets),
//     concatMap(() =>
//       this.quadlService.getDatasets().pipe(
//         map((dataset: IResponse[]) =>
//           DataSetsActions.LoadDatasetsSuccess({ dataset })
//         ),
//         catchError((error) =>
//           of(DataSetsActions.LoadDatasetsFailure({ error: error.message }))
//         )
//       )
//     )
//   );
// });
