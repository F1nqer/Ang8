import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  // tslint:disable-next-line:typedef
  write(logMessage: string){

    console.log(logMessage);
  }
  constructor() { }
}
