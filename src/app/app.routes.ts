import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateformComponent } from './components/createform/createform.component';
import { FormsListComponent } from './components/forms-list/forms-list.component';
import { ViewFormComponent } from './components/view-form/view-form.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { VendorsListComponent } from './components/vendors-list/vendors-list.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "create-form",
    component: CreateformComponent,
  },
  {
    path: "forms-list",
    component: FormsListComponent,
  },
  {
    path: "view-form/:form_id",
    component: ViewFormComponent,
  },
  {
    path: "customers-list",
    component: CustomersListComponent,
  },
  {
    path: "vendors-list",
    component: VendorsListComponent,
  },
  {
    path: "view-profile",
    component: ViewProfileComponent,
  },
  {
    path: "",
    component: DashboardComponent,
  },
];
