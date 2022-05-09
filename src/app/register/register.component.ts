import { Component, OnInit } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../api-service/users.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  user: User = new User;
  email: FormControl;
  password: FormControl;
  name: FormControl;
  constructor(private userService: UsersService, private route: Router) {
    this.email = new FormControl('');
    this.name = new FormControl('');
    this.password = new FormControl('');
   }

  ngOnInit(): void {
  }

  submitForm(){
    this.user.nombre = this.name.value;
    this.user.correo = this.email.value;
    this.user.contraseña = this.password.value;
    console.log(this.user)
    this.userService.createUser(this.user)
      .subscribe((res) => {
        if(res){
          this.route.navigate(['/catalogo']);
        }
      })
  }
}
