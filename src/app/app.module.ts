import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NeedAuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CheckboxComponent } from './checkbox/checkbox.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ListComponent,
    ProductTypeComponent,
    FeedbackComponent,
    CheckboxComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
