import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Student } from '../student.model';

@Injectable({
  providedIn: 'root'
})

export class CrudServiceService {
  baseUrl:String = 'http://localhost:8083'
  studentEmitter: EventEmitter<Student> = new EventEmitter();
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Student[]>("http://localhost:8083/api/student");
  }

  getSingleData(id:number){
    return this.http.get<Student>("http://localhost:8083/api/student/"+id);
  }

  postData(student: Student) {
    
    return this.http.post<Student>("http://localhost:8083/api/student", student);

  }

  updateData(student: Student, id: any) {
    return this.http.put<Student>(`http://localhost:8083/api/student/${id}`, student);
  }

  deleteData(id: any) {
    return this.http.delete<Student>(`http://localhost:8083/api/student/${id}`);
  }

  uploadImage(imgFile:File,id:number){
    let formData = new FormData();
    formData.append('file',imgFile)
    console.log(formData);
    return this.http.post(`${this.baseUrl}/api/student/upload/image/${id}`,formData,{responseType: 'text'});
  }


}
