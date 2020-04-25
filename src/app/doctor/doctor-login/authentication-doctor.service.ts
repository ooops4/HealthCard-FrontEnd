import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

export interface DoctorDetails {
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

interface DoctorTokenResponse {
  token: string
}

export interface DoctorTokenPayload {
  _id: string
  first_name: string
  last_name: string
  email: string
  password: string
  gender: string
  age: string
}

@Injectable()
export class AuthenticationDoctorService {
  private token: string

  constructor(private httpClient: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('doctortoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('doctortoken')
    }
    return this.token
  }

  public getDoctorDetails(): DoctorDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      // console.log(window.atob(payload))
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getDoctorDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }
  public AddUser(user: DoctorTokenPayload): Observable<any> {
    const base = this.httpClient.post(`http://127.0.0.1:5000/api/register`, user)

    const request = base.pipe(
      map((data: DoctorTokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }
  

  public login(user: DoctorTokenPayload): Observable<any> {
    const base = this.httpClient.post(`http://127.0.0.1:5000/api/login`, user)

    const request = base.pipe(
      map((data: DoctorTokenResponse) => {
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
    this.router.navigateByUrl('/doctor/login')
  }
}