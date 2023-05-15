import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  fieldEmitter:EventEmitter<string> = new EventEmitter();
  constructor() { }
}
