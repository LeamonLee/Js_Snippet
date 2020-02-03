import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealtimeComponent } from './pages/realtime/realtime.component';
import { HistoryComponent } from './pages/history/history.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path:"",
    component:RealtimeComponent
  },
  {
    path:"history",
    component:HistoryComponent
  },
  {
    path:"list",
    component:ListComponent
  },
  {
    path:"**",
    component:RealtimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
