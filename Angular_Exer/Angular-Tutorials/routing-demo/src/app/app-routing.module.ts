import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';


const routes: Routes = [
  // Default route
  { path: '', redirectTo: '/departments', pathMatch: 'full' },  // pathMatch has another option, which is prefix
  { path: 'departments', component: DepartmentListComponent },
  { 
    path: 'departments/:id',  // :id is route parameter
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent},
      { path: 'contact', component: DepartmentContactComponent}
    ]
   },
  { path: 'employees',   component: EmployeeListComponent },
  // The wildchard Route should always be the last route in the configuration.
  // Becasue the router will always try to match the route from the top.
  { path: '**',   component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,
                                  DepartmentDetailComponent, 
                                  EmployeeListComponent,
                                  PageNotFoundComponent,
                                  DepartmentOverviewComponent,
                                  DepartmentContactComponent]