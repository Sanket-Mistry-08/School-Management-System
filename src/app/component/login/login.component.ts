import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { loginDTO } from 'src/app/model/loginDTO.model';
import { loginResponse } from 'src/app/model/loginResponse.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { RoleServiceService } from 'src/app/service/role-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private authService:AuthenticationService,private router:Router,private roleService:RoleServiceService){

  }
  ngOnInit(): void {

    throw new Error('Method not implemented.');

  }

  onSubmit(username:HTMLInputElement,password:HTMLInputElement){

    let loginDTO$ = new loginDTO(username.value,password.value);
    console.log(loginDTO$);

    this.authService.doLogin(loginDTO$).subscribe((res)=>{
      console.log("post invoked")
      console.log(res)
      console.log(res.state);
      console.log(res.httpStatus);
      console.log(res.authorities[0].authority)

      if(res.state == 'authorized'){
        this.router.navigateByUrl("/home")
        this.roleService.username=username.value;
        this.roleService.role=res.authorities[0].authority;

      }else{
        alert("invalid credentials")
      }
    })



  }
}
