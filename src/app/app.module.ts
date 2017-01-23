import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

// Components
import { HomeComponent } from './components/home/home.component';
import { ApiService } from './services/api/api.service';

// Routing
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
  ],
  providers: [
    ApiService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
