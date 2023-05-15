import { Injectable } from '@angular/core';
import { loginDTO } from '../model/loginDTO.model';
import { HttpClient } from '@angular/common/http';
import { loginResponse } from '../model/loginResponse.model';
import { registerDTO } from '../model/registerDTO.model';
import { registerResponse } from '../model/registerResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl='http://localhost:5200/user'

  constructor(private http:HttpClient) { }

  doLogin(loginDTO:loginDTO){

    return this.http.post<loginResponse>(`${this.baseUrl}/login`,loginDTO);

  }

  doRegister(registerDTO:registerDTO){
    return this.http.post<registerResponse>(`${this.baseUrl}/register`,registerDTO)
  }
}
