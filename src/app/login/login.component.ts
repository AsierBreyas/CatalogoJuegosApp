import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  showError() {
    this.toastr.toastrConfig.positionClass = 'toast-top-center';
    this.toastr.error('Correo o contraseña mal introducida');
  }
}
