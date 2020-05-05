import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourlistPage } from './tourlist.page';

const routes: Routes = [
  {
    path: '',
    component: TourlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourlistPageRoutingModule {}
