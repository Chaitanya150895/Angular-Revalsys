import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NeedAuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { FeedbackComponent } from './feedback/feedback.component';


const routes: Routes = [
{path: 'login', component:LoginComponent},
{path: '', component: DashboardComponent, canActivate:[NeedAuthGuard]},
{path: 'list', component: ListComponent, canActivate:[NeedAuthGuard]},
{path: 'feedback', component: FeedbackComponent, canActivate:[NeedAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
