import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-left-part',
  templateUrl: './left-part.component.html',
  styleUrls: ['./left-part.component.css']
})
export class LeftPartComponent implements OnInit{

  @ViewChild('.chevron') el!:ElementRef;
  
  main_menu_data = [
    {name:'dashboard',logo:'fa-solid fa-table-columns',expandable:true,child:['Admin dashboard','Teacher dashboard','Student dashboard']},
    {name:'students',logo:'fa-solid fa-graduation-cap',expandable:true,child:['Student list','student add']},
    {name:'teachers',logo:'fa-solid fa-chalkboard-user',expandable:true,child:['Teacher list','Teacher add']},{name:'departments',logo:'fa-solid fa-building',expandable:true,child:['Department list','Department add']},
    {name:'subjects',logo:'fa-solid fa-book-open-reader',expandable:true,child:['Subject list','Subject add']},{name:'invoices',logo:'fa-solid fa-file-invoice',expandable:false,child:[]}
  ]
  pages_data = [
    {name:'authenticate',logo:'fa-solid fa-shield-halved',expandable:true,child:['Admin dashboard','Teacher dashboard','Student dashboard']},
    {name:'blank page',logo:'fa-solid fa-file',expandable:true,child:['Admin dashboard','Teacher dashboard','Student dashboard']},
   ]
   management_data = [
    {name:'accounts',logo:'fa-solid fa-table-columns',expandable:true,child:['Fees collection','Expenses','Salary']},
    {name:'holiday',logo:'fa-solid fa-graduation-cap',expandable:false,child:[]},
    {name:'fees',logo:'fa-solid fa-chalkboard-user',expandable:false,child:[]},{name:'exam list',logo:'fa-solid fa-building',expandable:false,child:[]},
    {name:'events',logo:'fa-solid fa-book-open-reader',expandable:false,child:[]},{name:'time table',logo:'fa-solid fa-file-invoice',expandable:false,child:[]},
    {name:'library',logo:'fa-solid fa-book-open-reader',expandable:false,child:[]},{name:'blogs',logo:'fa-solid fa-file-invoice',expandable:true,child:['All blogs','Add blog']},
    {name:'settings',logo:'fa-solid fa-book-open-reader',expandable:false,child:[]}
  ]
  others_data=[
    {name:'hostel',logo:'fa-solid fa-table-columns',expandable:true,child:['Admin dashboard','Teacher dashboard','Student dashboard']},
    {name:'sports',logo:'fa-solid fa-graduation-cap',expandable:false,child:['Admin dashboard','Teacher dashboard','Student dashboard']},
    {name:'transport',logo:'fa-solid fa-chalkboard-user',expandable:false,child:['Admin dashboard','Teacher dashboard','Student dashboard']}
  ]
  ngOnInit(): void {
    
  }
  onmouseenter(el:HTMLUListElement){
    if(el.childElementCount==1){
      el.style.height= '22px'
    }else if(el.childElementCount==2){
      el.style.height= '54px'
    }else if(el.childElementCount==3){
      el.style.height= '88px'
    }else if(el.childElementCount==4){
      el.style.height= '44px'
    }else{
      el.style.height = '0px'
    }

  }
  onmouseleave(el:HTMLUListElement){
    el.style.height= '0px'
  }
 
}
