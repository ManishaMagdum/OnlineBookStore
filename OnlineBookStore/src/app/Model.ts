export interface Book{
    name:string,
    author:string,
    src:string,
    amount:number;
}
export interface LoginForm{
    email:string,
    password:string;
}
export interface RegisterForm{
    email:string,
    password:string,
    confirmPassword:string;
}