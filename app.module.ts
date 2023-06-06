import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ContratsComponent } from './contrats/contrats.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { UsersComponent } from './users/users.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { CdiComponent } from './cdi/cdi.component';
import { CddComponent } from './cdd/cdd.component'

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContratsComponent,
    StudentComponent,
    UsersComponent,
    CreateContractComponent,
    CdiComponent,
    CddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
