import { Component, OnInit, EventEmitter, Output, DoCheck, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudServiceService } from 'src/app/service/crud-service.service';
import { FieldService } from 'src/app/service/field.service';
import { ProfileHandlerService } from 'src/app/service/profile-handler.service';
import { Student } from 'src/app/student.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, DoCheck {

  students: any[] = [];
  beat: boolean = false;
  studentForm!: FormGroup;
  updateForm = false;
  studentID!: any;
  showProfile!:boolean
  isProfileActive = false
  studentField = false
  teacherField = true
  dashBoardField = false
  field = 'dashboard'
  
  constructor(private das: CrudServiceService, private fb: FormBuilder,private ph:ProfileHandlerService,private fieldService:FieldService) { }

  ngDoCheck(): void { }

  ngOnInit(): void {

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
      this.students = res;
      console.log("This students : ", this.students)
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
      phone: [student.phone],
      degree: [student.degree],
      year: [student.year]
    });

  }

  onDelete(id: any) {

    this.das.deleteData(id).subscribe(res => console.log(res))
    this.refresh();

  }

  onSubmit() {

    console.log(this.studentForm.value);
    this.das.updateData(this.studentForm.value, this.studentID).subscribe(res => console.log("succesfully updated " + res));
    this.updateForm = false
    this.refresh();


  }

  refresh() {

    setTimeout(() => {
      this.das.getData().subscribe((res) => {
        this.students = res;
        console.log("This students : ", this.students)
      })
    }, 500);
    
  }

  showProfileView(id:number){

    this.showProfile = true
    this.isProfileActive = true
    this.ph.activateProfile(id);

  }


}
