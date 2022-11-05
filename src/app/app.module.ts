import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { DatasetsEffectsService } from './redux/Effects/datasetsEffects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DatasetReducer } from './redux/Reducers/DatasetsReducers';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LineChartComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('dataset',DatasetReducer),
    EffectsModule.forFeature([DatasetsEffectsService]),
    StoreDevtoolsModule.instrument({name:'dataset', maxAge: 25, logOnly: environment.production }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
