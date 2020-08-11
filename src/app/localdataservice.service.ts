import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaldataserviceService {



  isLogin:boolean=false;

  setlog(b:boolean)
  {
    this.isLogin=b;
  }
 
  getlog():boolean
  {
    return this.isLogin;
  }
}


 
