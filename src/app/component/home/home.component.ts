import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images!:any
  imgs!:any

  
  constructor(private http:HttpClient){

  }
  onClick(date:any){
    console.log(date.value)
  }
  getImage(){
    this.http.get<any>('http://localhost:8083/api/student/image').subscribe(res=>this.images=res)
  }
  getSingleImage(){
    this.http.get<any>('http://localhost:8083/api/getImage').subscribe(res=>this.imgs=res)
  }
}
