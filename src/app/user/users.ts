export interface UserDetails {
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