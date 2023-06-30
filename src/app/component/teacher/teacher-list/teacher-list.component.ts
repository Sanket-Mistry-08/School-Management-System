import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentUpdateDTO } from 'src/app/model/StudentUpdateDTO.model';
import { studentInformation } from 'src/app/model/studentInformation.model';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import { CrudServiceService } from 'src/app/service/crud-service.service';
import { FieldService } from 'src/app/service/field.service';
import { ProfileHandlerService } from 'src/app/service/profile-handler.service';
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements DoCheck,OnInit{
  teacherList: any[] = [];
  beat: boolean = false;
  studentForm!: FormGroup;
  updateForm = false;
  studentID!: any;
  showProfile!:boolean
  isProfileActive = false
  studentField = false
  teacherField = true
  dashBoardField = false
  field = 'students'
  
  constructor(private das: CrudServiceService, private fb: FormBuilder,private ph:ProfileHandlerService,private fieldService:FieldService
    ,private adminService:AdminServiceService) { }

  ngDoCheck(): void { }

  ngOnInit(): void {

    this.adminService.getTeacherList().subscribe(res => {
      console.log("studentList ")
      console.log(res)
      this.teacherList = res;
    })

    this.fieldService.fieldEmitter.subscribe(res=>{
      console.log("data table =>",res)
      this.field = res
    })

    this.studentForm = this.fb.group({
      id: [''],
      name: [''],
      email: [''],
      phone: [''],
      degree: [''],
      year: ['']
    });

    this.das.getData().subscribe((res) => {
      // this.students = res;
      // console.log("This students : ", this.students)
    })

    this.ph.activeProfile.subscribe(res=>{
      console.log("Profile removal requested")
      this.showProfile = false
      this.isProfileActive = false})

  }

  onUpdate(student: any) {

    console.log("updated succesfully + ", student)
    this.studentID = student.id
    this.updateForm = true
    this.studentForm = this.fb.group({
      id: [student.id],
      name: [student.name],
      email: [student.email],
      phone: [student.phone]
    });

  }

  onDelete(id: any) {

    this.das.deleteData(id).subscribe(res => console.log(res))
    this.refresh();

  }

  onSubmit() {

    console.log(this.studentForm.value);
    // this.das.updateData(this.studentForm.value, this.studentID).subscribe(res => console.log("succesfully updated " + res));
    let teacherUpdateDTO:StudentUpdateDTO = new StudentUpdateDTO(this.studentForm.value.id,this.studentForm.value.name,this.studentForm.value.email,this.studentForm.value.phone)
    this.adminService.updateTeacher(teacherUpdateDTO).subscribe(res=>console.log("teacher updated "))
    this.updateForm = false
    this.refresh();


  }

  refresh() {

    setTimeout(() => {
      // this.das.getData().subscribe((res) => {
        // this.students = res;
        // console.log("This students : ", this.students)
      // })
      this.adminService.getTeacherList().subscribe(res => {
        console.log("studentList ")
        console.log(res)
        this.teacherList = res;
      })
    }, 500);
    
  }

  showProfileView(id:number){

    this.showProfile = true
    this.isProfileActive = true
    this.ph.activateProfile(id);

  }

}
