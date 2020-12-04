import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';

@Injectable()
export class CarriageValidatorService {
  VagonNumValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise((resolve) => {
        let sum = 0;
        let i = 0;
        let check;
        let tgdk;
        while (i < 7) {
          tgdk = Number(control.value[i]);
          if (Number(tgdk) % 2 === 0) {
            tgdk *= 1;
          }
          else {
            tgdk *= 2;
          }
          check = String(tgdk);
          if (tgdk >= 10) {
            tgdk = Number(check[0]) + Number(check[1]);
          }
          sum += tgdk;
          i++;
        }
        check = 0;
        while (sum % 10 !== 0) {
          sum++;
          check++;
        }
        alert(check);
        if (check === Number(control.value[7])){
          resolve(null);
        }
        else{
          resolve({vagonNum: true});
        }
      });
    };
  }
  constructor() { }
}
