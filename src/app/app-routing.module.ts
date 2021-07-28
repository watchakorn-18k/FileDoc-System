import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocReceiverComponent } from './component/doc-receiver/doc-receiver.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'reset-password',component: ResetPasswordComponent},
  {path:'หนังสือรับ',component: DocReceiverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
