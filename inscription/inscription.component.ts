import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UsersService } from '../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit, OnDestroy {
  firstName!: any;
  lastName!: any;
  password!: any;
  email!: any;
  rep: any = null;
  registerForm!: FormGroup;
  constructor(private userService: UsersService, private route: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      lastName: new FormControl('', [Validators.required,Validators.minLength(1)]),
      firstName: new FormControl('', [Validators.required,Validators.minLength(2)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(5)]),
    });
    this.firstName = this.registerForm.get('firstName') ;
    this.lastName = this.registerForm.get('lastName') ;
    this.email = this.registerForm.get('email') ;
    this.password = this.registerForm.get('password') ;
    
  }

  public saveForm(): void {
    this.userService.saveUser(this.registerForm.value).subscribe((data) => {
      let resp!: any;
      resp = data;
      this.rep = resp.resp;
    });
  }
  ngOnDestroy(): void {}
}
