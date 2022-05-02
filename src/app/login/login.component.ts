import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { UsersService } from '../api-service/users.service';
import { AuthUser } from '../Models/AuthUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  email: FormControl;
  password: FormControl;
  auth: AuthUser = new AuthUser;
  constructor(private toastr: ToastrService, private userService: UsersService, private route: Router) {
    this.email = new FormControl('');
    this.password = new FormControl('');
  }

  ngOnInit(): void { }

  submitForm() {
    this.auth.EmailAddress = this.email.value;
    this.auth.Password = this.password.value;
    console.log(this.auth);
    this.userService.authUser(this.auth)
      .subscribe((res) => {
        if(res){
          this.route.navigate(['/catalogo']);
        }
      })
      // .then((this.route.navigate(['/catalogo'])))
      // .throwError(
      //   this.toastr.toastrConfig.positionClass = 'toast-top-center',
      //   this.toastr.error('Correo o contraseña mal introducida'
      //   )
      // );
  }
}
