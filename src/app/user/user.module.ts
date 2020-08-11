import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  public id: number;
  public fullname: string;
  public password: string;
  public email: string;
 
  constructor(id: number ,fullname: string ,email: string ,password: string ) {
    this.fullname = fullname;
    this.id = id;
    this.email= email;
    this.password=password;
  }
  setId(id){
    this.id=id;
  }
  getId(){
    return this.id;
  }
  setfullName(fullname){
    this.fullname=fullname;
  }

  getfullName(){
    return this.fullname;
  }

  setEmailAdd(email){
    this.email=email;
  }
  getEmailAdd(){
    return this.email;
  }

  setPassword(password){
    this.password=password;
  }
  getPassword(){
    return this.password;
  }

}
