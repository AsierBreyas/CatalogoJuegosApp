import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthUser } from '../Models/AuthUser';
import { User } from '../Models/User';
import { Users } from '../Models/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url = environment.apiUrl + '/Auth';

  constructor(private http: HttpClient, private toaster:ToastrService) { }

  public createUser(user: User): any {
    this.http.post<User>(`${this.url}`, user).subscribe((data: any) => {
      Users.usuarios = data;
    })
  }

  public authUser(auth: AuthUser): Observable<AuthUser | void>  {
    return this.http.post<AuthUser>(`${this.url}/authenticate`, auth).pipe(map((user: AuthUser) => {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }),
    catchError((err) => this.handleError(err)));
  }
  private handleError(err): Observable<never>{
    let errorMessage = 'Correo o contraseña mal introducida';
    this.toaster.toastrConfig.positionClass = 'toast-top-center';
    this.toaster.error(errorMessage);
    return throwError(errorMessage);
  }
}