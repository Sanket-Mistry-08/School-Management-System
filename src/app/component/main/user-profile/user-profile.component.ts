import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { CrudServiceService } from 'src/app/service/crud-service.service';
import { ProfileHandlerService } from 'src/app/service/profile-handler.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

  userId!:number
  imgUrl!:String
  name!:String
  degree!:String
  year!:String
  updatedImage!:File
  count = 0 
  @ViewChild('image') public image!: ElementRef ;
  constructor(private ph:ProfileHandlerService,private service:CrudServiceService){

  }

  ngOnInit(): void {

    console.log("initialized")
    this.userId = this.ph.activeProfileId;
    //in case response in line 25 comes late
    this.imgUrl = this.ph.activeImageUrl;
    this.service.getSingleData(this.userId).subscribe(
      res=>{console.log("userProfile ",res);   
      this.userId = res.id 
      this.imgUrl = `http://localhost:8083/api/files/${res.id}`;
      this.name = res.name
      this.degree = res.degree 
      this.year = res.year
    });
    

  }

  onClick(){
    this.ph.activeProfile.emit(false)
    this.ph.isProfileActive = false;
    
  }

  uploadImage(event:any){
    this.updatedImage = event.target.files[0]
    this.service.uploadImage(this.updatedImage,this.userId).subscribe(
      res=>{
        console.log(res)
        console.log("image updated !")
        // this.image.nativeElement.src = ""
        setTimeout(() => {
          // alert("iamge succefully updated")
         
          let xyz = this.count+'xyz'
          this.image.nativeElement.src = `http://localhost:8083/api/files/${this.userId}/${xyz}`;
          this.count++
          
        }, 1000);
      });
    
  }

 
}
