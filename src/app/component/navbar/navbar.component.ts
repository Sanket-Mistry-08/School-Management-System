import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from 'src/app/service/role-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  username!:string
  role!:string
  constructor(private roleService:RoleServiceService){

  }
  ngOnInit(): void {
    this.username = this.roleService.username
    this.role = this.roleService.role
  }
}
