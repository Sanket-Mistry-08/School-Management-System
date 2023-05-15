import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { CrudServiceService } from 'src/app/service/crud-service.service';
import { Student } from 'src/app/student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  update: boolean = false
  studentForm!: any;
  count = 0;
  submit: boolean = false;
  selectedFile!:File;
  // selectedFile!:FileList;

  constructor(private fb: FormBuilder, private das: CrudServiceService, private router: Router) { }

  ngOnInit(): void {

    this.studentForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      degree: [''],
      year: [''],
    });

  }

  selectFile(event:any){

      this.selectedFile=event.target.files[0]

  }


  onSubmit() {

    this.submit = true
    console.log("onSubmit() => ", this.studentForm.value);
    this.das.postData(this.studentForm.value).subscribe(res => {
      console.log(res);
      this.das.uploadImage(this.selectedFile,res.id).subscribe(res => console.log("img uploaded succesfully"))
    });
    setTimeout(() => {
      this.router.navigate(['/home/data']);
      this.submit = false
    }, 1000);

  }



}
