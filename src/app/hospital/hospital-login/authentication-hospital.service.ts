import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

export interface HospitalDetails {
  _id: string
  identity: {
    hospital_name:string,
    first_name: string,
    last_name: string,
    email: string
  }
  password: string
  exp: number
  iat: number
}

interface HospitalTokenResponse {
  token: string
}

export interface HospitalTokenPayload {
  _id: string
  hospital_name: string
  first_name: string
  last_name: string
  email: string
  password: string
  gender: string
  age: string
}

@Injectable()
export class AuthenticationHospitalService {
  private token: string

  constructor(private httpClient: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('hospitaltoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('hospitaltoken')
    }
    return this.token
  }

  public getHospitalDetails(): HospitalDetails {
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
    const user = this.getHospitalDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }
  public AddUser(user: HospitalTokenPayload): Observable<any> {
    const base = this.httpClient.post(`http://127.0.0.1:5000/api/hospital/register`, user)

    const request = base.pipe(
      map((data: HospitalTokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }
  

  public login(user: HospitalTokenPayload): Observable<any> {
    const base = this.httpClient.post(`http://127.0.0.1:5000/api/hospital/login`, user)

    const request = base.pipe(
      map((data: HospitalTokenResponse) => {
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
    window.localStorage.removeItem('hospitaltoken')
    this.router.navigateByUrl('/hospital/login')
  }
}