import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileHandlerService {

  isProfileActive!:boolean
  activeProfileId!:number
  activeImageUrl!:String 
  activeProfile:EventEmitter<boolean> = new EventEmitter()
  constructor() {
   }

  activateProfile(id:number){
    this.activeProfileId = id;
    this.isProfileActive = true;
    this.activeImageUrl = `http://localhost:8083/api/files/${id}`
  }
  onLoad(){

  }

}
