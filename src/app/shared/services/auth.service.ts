import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { share } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  session: any;
  constructor(private http: HttpClient, private router: Router) {
    let localStorageSession = localStorage.getItem('session');
    this.session = localStorageSession
      ? JSON.parse(localStorageSession)
      : undefined;
  }

  login({ email, password }: { email: string; password: string }) {
    let ob = this.http
      .post(environment.backendBaseUrl + '/user/signin', {
        email,
        password,
      })
      .pipe(share());

    ob.subscribe((res) => {
      if (res) {
        this.session = res;
        localStorage.setItem('session', JSON.stringify(res));
      }
    });

    return ob;
  }

  logout() {
    this.http
      .get(environment.backendBaseUrl + '/user/logout', {
        headers: {
          Authorization: 'Bearer ' + this.session.token,
        },
      })
      .subscribe();

    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigate(['/']);
  }
}
