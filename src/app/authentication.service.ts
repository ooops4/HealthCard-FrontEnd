import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

export interface UserDetails {
  _id: string
  identity: {
    id: string
    first_name: string
    last_name: string
    email: string
    gender: string
    age: number
    contact_number:number
    emergency_contact_number:number
    father_name:string
    mother_name:string
    blood_group:string
    profile_photo:string
    marital_status:string
    aadhar_number:number
    street:string
    city:string
    state:string
    pincode:number
    landmark:string
    dob:Date
  }
  password: string
  exp: number
  iat: number
}

interface UserTokenResponse {
  token: string
}

export interface TokenPayload {
  _id: string
  first_name: string
  last_name: string
  email: string
  password: string
}

@Injectable()
export class AuthenticationService {
  private UserToken: string

  constructor(private httpClient: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.UserToken = token
  }

  private getToken(): string {
    if (!this.UserToken) {
      this.UserToken = localStorage.getItem('usertoken')
    }
    return this.UserToken
  }

  public getUserDetails(): UserDetails {
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
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public register(user: TokenPayload): Observable<any> {
    const base = this.httpClient.post(`http://127.0.0.1:5000/api/register`, user)

    const request = base.pipe(
      map((data: UserTokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.httpClient.post(`http://127.0.0.1:5000/api/user/login`, user)

    const request = base.pipe(
      map((data: UserTokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  public logout(): void {
    this.UserToken = ''
    window.localStorage.removeItem('usertoken')
    this.router.navigateByUrl('/')
  }
}