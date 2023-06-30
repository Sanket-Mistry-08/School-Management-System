import { Injectable } from '@angular/core';
import { studentInformation } from '../model/studentInformation.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { teacherInformation } from '../model/teacherInformation.model';
import { StudentUpdateDTO } from '../model/StudentUpdateDTO.model';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  baseUrl = "http://localhost:5200/admin"
  constructor(private http: HttpClient) { }


  addStudent(studentInfo: studentInformation) {
    return this.http.post(this.baseUrl + "/student", studentInfo, { responseType: 'text' });
  }

  addTeacher(teacherInfo: teacherInformation) {
    return this.http.post(this.baseUrl + "/teacher", teacherInfo, { responseType: 'text' });
  }

  getSubjectList(standard: String) {
    return this.http.get<String[]>(this.baseUrl + "/subjectList/" + standard);
  }

  getStudentList() {
    return this.http.get<studentInformation[]>(this.baseUrl + "/student")
  }
  updateStudent(student: StudentUpdateDTO) {
    return this.http.post(this.baseUrl + "/student/update", student);
  }
  updateTeacher(teacher: StudentUpdateDTO) {
    return this.http.post(this.baseUrl + "/teacher/update", teacher);
  }
  getTeacherList() {
    return this.http.get<studentInformation[]>(this.baseUrl + "/teacher")
  }

}
