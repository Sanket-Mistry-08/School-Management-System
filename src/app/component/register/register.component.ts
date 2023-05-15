import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { registerDTO } from 'src/app/model/registerDTO.model';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router,private authService:AuthenticationService) { }

  error = ''

  onSubmit(username:HTMLInputElement, password:HTMLInputElement) {

    let registerDTO$ = new registerDTO(username.value,password.value);
    console.log(registerDTO$)
    this.authService.doRegister(registerDTO$).subscribe(res=>
      {
        if(res.httpStatus.toLowerCase() == 'accepted'){
          this.router.navigateByUrl("/home")
        }else{
          alert("user already exists");
        }
      })
  
  
  }

}
