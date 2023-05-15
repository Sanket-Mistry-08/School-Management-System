import { Injectable } from '@angular/core';
import { studentInformation } from '../model/studentInformation.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { teacherInformation } from '../model/teacherInformation.model';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  baseUrl = "http://localhost:5200/admin"
  constructor(private http:HttpClient) { }


  addStudent(studentInfo:studentInformation){
    return this.http.post(this.baseUrl+"/student",studentInfo,{responseType:'text'});
  }

  addTeacher(teacherInfo:teacherInformation){
    return this.http.post(this.baseUrl+"/teacher",teacherInfo,{responseType:'text'});
  }

  getSubjectList(standard:String){
    return this.http.get<String[]>(this.baseUrl+"/subjectList/"+standard);
  }
}
