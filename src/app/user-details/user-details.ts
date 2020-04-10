export interface UserDetails{
    _id: number
    first_name: string
    last_name:string
    email:string
    password:string
    exp: number
    iat: number
    age: number | null
    city: string | null
}