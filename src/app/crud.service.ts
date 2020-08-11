import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  redirectUrl: string;
  public data=[];
  public catId: string;
  public productId: string;  
  baseUrl: string = "http://localhost/blubrandz/api";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }
  public userlogin(username, password) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
        .pipe(map(UserModule => {
            this.setToken(UserModule[0].fullname);
            this.setId(UserModule[0].id.toString());
            this.getLoggedInName.emit(true);
            return UserModule;
        }));
}
public userregistration(fullname,email,password) {
  return this.httpClient.post<any>(this.baseUrl + '/registration.php', {fullname,email,password})
      .pipe(map(UserModule => {
       // console.log("res"+Usermodule);
          return UserModule;
      }));
    }
    
//to
setToken(token: string) {
  sessionStorage.setItem('token', token);
}
 
getToken() {
  return sessionStorage.getItem('token');
}
 
deleteToken() {
  sessionStorage.removeItem('token');
}

//token
setId(id: string) {
  sessionStorage.setItem('id', id);
}
 
getId() {
  return sessionStorage.getItem('id');
} 
deleteId() {
  sessionStorage.removeItem('id');
}
isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
    return true;
  }
  return false;
}

}