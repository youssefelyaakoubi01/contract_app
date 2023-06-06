import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  public loginform!: FormGroup;
  user: any = null;
  etat:any = null;
  username!:any;
  password!:any;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.loginform = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(5)]),
    });
    this.username=this.loginform.get('username')
    this.password=this.loginform.get('password')
  
  }

  loginFunction() {
    this.userService.loginUser(this.loginform.value).subscribe((res) => {
      let data: any = res;
      if (data[1].rep == true) {
        this.user = data[0].userv;
        alert(JSON.stringify(this.user));
      } else if (data[1].rep == false) {
        
        this.etat = data[0].data;
      } 
    });

    /*
    
    */
  }

  ngOnDestroy(): void {}
}
