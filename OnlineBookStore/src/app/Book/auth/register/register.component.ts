import { Component } from '@angular/core';

import { RegisterForm } from 'src/app/Model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(){}
myForm:RegisterForm={
  email:'',
  password:'',
  confirmPassword:'',
};
ngOnInit():void{

}
submit(){
  console.log(this.myForm);
}
}
