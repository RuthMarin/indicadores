import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListIndicatorComponent } from './list-indicator/list-indicator.component';
import { IndicatorDetailComponent } from './indicator-detail/indicator-detail.component';
import { IndicatorComponent } from './indicator/indicator.component';

const routes: Routes = [
	{ path: 'list-indicator/:id', component: ListIndicatorComponent },
	{ path: 'indicator-detail/:id', component: IndicatorDetailComponent  },
	{ path: 'indicator', component: IndicatorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
