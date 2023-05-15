import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { studentInformation } from 'src/app/model/studentInformation.model';
import { teacherInformation } from 'src/app/model/teacherInformation.model';
import { AdminServiceService } from 'src/app/service/admin-service.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent {
  teacherInfoForm!: FormGroup
  teacherInformation!: teacherInformation
  awailableSubject!:String[]

  constructor(private fb: FormBuilder,private adminService:AdminServiceService) { }


  ngOnInit(): void {
    this.teacherInfoForm = this.fb.group({
      teacherName: [''],
      teacherEmail: [''],
      teacherStandard: [''],
      teacherSex: [''],
      teacherPhone: [''],
      teacherDOB: [''],
      teacherAdress:[''],
      teacherSubject:['']

    })
  }
  
  onSubmit() {

    // let myuuid = uuidv4();
    let random = Math.floor(Math.random()*10)
    let adder = Math.floor(Math.random()*990) + random;
    let id=0;
    switch (this.teacherInfoForm.value.studentStandard) {
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
    this.teacherInformation = new teacherInformation( this.teacherInfoForm.value.teacherName,
      this.teacherInfoForm.value.teacherEmail,
      this.teacherInfoForm.value.teacherStandard,
      this.teacherInfoForm.value.teacherAdress,
      this.teacherInfoForm.value.teacherSex,
      this.teacherInfoForm.value.teacherPhone,
      this.teacherInfoForm.value.teacherDOB,
      this.teacherInfoForm.value.teacherSubject

    );

    console.log(this.teacherInformation)
    this.adminService.addTeacher(this.teacherInformation).subscribe(res=>console.log(res))
  }

  onChange(standard:HTMLSelectElement){
    console.log("change requested");
    this.adminService.getSubjectList(standard.value).subscribe(res=>this.awailableSubject=res);
    
  }

}
