import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateEmployeeComponent} from './employees/create-employee.component';
import {ListEmployeesComponent} from './employees/list-employees.component';
 
const routes: Routes = [
  // The 3rd route specifies the route to redirect to if the path
  // is empty. In our case we are redirecting to /list
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }        // pathMatch property value can be full or prefix.

];

// To let the router know about the routes configured above,
// pass "appRoutes" constant to forRoot(appRoutes) method
// We also have forChild() method. We will discuss the difference
// and when to use one over the other in our upcoming videos
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
