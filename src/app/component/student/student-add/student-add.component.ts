import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { studentInformation } from 'src/app/model/studentInformation.model';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import {v4 as uuidv4} from 'uuid';
@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  studentInfoForm!: FormGroup
  studentInformation!: studentInformation
  constructor(private fb: FormBuilder,private adminService:AdminServiceService) { }


  ngOnInit(): void {
    this.studentInfoForm = this.fb.group({
      studentName: [''],
      studentEmail: [''],
      studentStandard: [''],
      studentSex: [''],
      studentPhone: [''],
      studentDOB: [''],
      studentAdress: [''],
      fName: [''],
      fEmail: [''],
      fPhone: [''],
      mName: [''],
      mEmail: [''],
      mPhone: [''],

    })
  }
  
  onSubmit() {

    // let myuuid = uuidv4();
    let random = Math.floor(Math.random()*10)
    let adder = Math.floor(Math.random()*990) + random;
    let id=0;
    switch (this.studentInfoForm.value.studentStandard) {
      case "1": {
        id = 11032010+adder
        break;
      }
      case "2": {
        id = 12032010+adder
        break;
      }
      case "3": {
        id = 13032010+adder 
        break;
      }
      case "4": {
        id = 14032010+adder 
        break;
      }
      case "5": {
        id = 15032010+adder 
        break;
      }
      case "6": {
        id = 16032010+adder
        break;
      }
      case "7": {
        id = 17032010+adder 
        break;
      }
      case "8": {
        id = 18032010+adder 
        break;
      }
      case "9": {
        id = 19032010+adder 
        break;
      }
      default: {
        console.log("xxx")
        break;
      }
    }
    this.studentInformation = new studentInformation(id, this.studentInfoForm.value.studentName,
      this.studentInfoForm.value.studentEmail,
      this.studentInfoForm.value.studentStandard,
      this.studentInfoForm.value.studentAdress,
      this.studentInfoForm.value.studentSex,
      this.studentInfoForm.value.studentPhone,
      this.studentInfoForm.value.studentDOB,
      this.studentInfoForm.value.fName,
      this.studentInfoForm.value.fEmail,
      this.studentInfoForm.value.fPhone,
      this.studentInfoForm.value.mName,
      this.studentInfoForm.value.mEmail,
      this.studentInfoForm.value.mPhone
    );

    console.log(this.studentInformation)
    this.adminService.addStudent(this.studentInformation).subscribe(res=>console.log(res))
  }



}
