import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldService } from 'src/app/service/field.service';

@Component({
  selector: 'app-right-part',
  templateUrl: './right-part.component.html',
  styleUrls: ['./right-part.component.css']
})
export class RightPartComponent implements OnInit {

  field = 'dashboard'

  constructor(private route:ActivatedRoute,private fieldService:FieldService,private router:Router){
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      
      let newField = ""+params.get('field')
      this.field = newField
      console.log(params.get('field') , "right part");
      this.fieldService.fieldEmitter.emit(this.field)
    });
  
  }

}
