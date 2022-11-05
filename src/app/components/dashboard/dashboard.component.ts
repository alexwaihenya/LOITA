import { Component, OnInit } from '@angular/core';
import { Idata } from 'src/app/interface/data';
import { Store } from '@ngrx/store';
import { QuandlService } from 'src/app/services/quandl.service';
import { DatasetState, getDatasets } from 'src/app/redux/Reducers/DatasetsReducers';
import * as Actions from '../../redux/Actions/datasetsActions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data!: Idata[]
  
  filter: string = '';
  p: number = 1;



  constructor(private quadlService:QuandlService, private store: Store<DatasetState>) { }

  ngOnInit(): void {
    this.getData()

  }

  datasets$ = this.store.select(getDatasets)

  // getData() {
  //   this.store.dispatch(Actions.LoadDatasets())
  // }

  getData() {
    this.quadlService.getDatasets().pipe().subscribe(res => {
      this.data = res.dataset.data.map(([date, value]) => {
        return {date,value}
      })
      console.log(this.data);
      
    })
  }

}
