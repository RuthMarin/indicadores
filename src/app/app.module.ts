
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APIInterceptor } from './services/apiinterceptor';
import { RequestService } from './services/request.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListIndicatorComponent } from './list-indicator/list-indicator.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { IndicatorDetailComponent } from './indicator-detail/indicator-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    ListIndicatorComponent,
    IndicatorComponent,
    IndicatorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
   providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }



