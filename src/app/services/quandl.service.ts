import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { IResponse } from '../interface/data';

@Injectable({
  providedIn: 'root'
})
export class QuandlService {
  baseUrl: string = "https://data.nasdaq.com/api/v3/datasets/OPEC/ORB.json?api_key=YxU_um6RfhzzjveW1Qic"
  datasets$!: Observable<IResponse[]>

  

  constructor(private http: HttpClient) { }

  getDatasets():Observable<IResponse> {
    return this.http.get<IResponse>(`${this.baseUrl}`)
  }
}
