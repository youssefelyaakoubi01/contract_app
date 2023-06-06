import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ContratsComponent } from './contrats/contrats.component';
import { StudentComponent } from './student/student.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes =[
  {path:'inscription', component: InscriptionComponent },
  {path:'login', component: LoginComponent},
  {path:'contracts',component: ContratsComponent},
  {path:'allUsers',component: UsersComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
