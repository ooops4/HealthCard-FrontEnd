import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of, EMPTY } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { NewUserDetails } from '../admin-dashboard/users-list/add-new-user/new-user-details'

export interface AdminDetails {
  _id: string
  identity: {
    first_name: string,
    last_name: string,
    email: string
  }
  password: string
  exp: number
  iat: number
}

interface AdminTokenResponse {
  token: string
}

export interface AdminTokenPayload {
  _id: string
  first_name: string
  last_name: string
  email: string
  password: string
  gender: string
  age: string
}

@Injectable()
export class AuthenticationAdminService {
  private token: string

  constructor(private httpClient: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('admintoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('admintoken')
    }
    return this.token
  }

  public getAdminDetails(): AdminDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getAdminDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }


  public AddUser(user: NewUserDetails): Observable<any> {
    const formData = new FormData;
    for (const [key, value] of Object.entries(user)) {
      formData.append(key, value);
    }
    console.log(formData);
    // return EMPTY
    return this.httpClient.post(`http://127.0.0.1:5000/api/register`, formData)
  }
  

  public login(user: AdminTokenPayload): Observable<any> {
    const base = this.httpClient.post(`http://127.0.0.1:5000/api/login`, user)

    const request = base.pipe(
      map((data: AdminTokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('admintoken')
    this.router.navigateByUrl('')
  }
}