import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Define as URLs
const routes: Routes = [
  // Define a URL com o path. Define o que vai rodar com o component
  { path: '', component: DashboardPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
