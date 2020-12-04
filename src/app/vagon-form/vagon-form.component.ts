import {Component, OnInit} from '@angular/core';
import {Vagon} from '../vagon';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

// import {VagonNumValidator} from '../vagon-checksum.directive';
@Component({
  selector: 'app-vagon',
  templateUrl: './vagon-form.component.html',
  styleUrls: ['./vagon-form.component.css']
})
export class VagonComponent implements OnInit {
  actionVagon: Vagon;
  manufacturer: string;
  num: string;
  statement: string;
  type: string;
  vagons: Vagon[] = [];
  sum: number;
  checksum: number;
  check = 0;
  tgdk: number;
  statements = ['Good', 'Broken', 'In repairing', 'Can use'];
  myForm: FormGroup;
  editVagonShow: Vagon;
  editVagon: FormControl;
  constructor() {

  }
  // tslint:disable-next-line:typedef
  show(num: Vagon){
    this.editVagonShow = num;
  }

  // // tslint:disable-next-line:typedef
  // // checksum(oper: number){
  // //   while (oper % 10 !== 0){
  // //     oper++;
  // //     this.check++;
  // //   }
  // // }
  // // tslint:disable-next-line:typedef
  // heightco(operate: string): number{
  //   let tgdk = Number(operate);
  //   if (tgdk % 2 === 0){
  //     tgdk *= 1;
  //   }
  //   else{
  //     tgdk *= 2;
  //   }
  //   operate = String(tgdk);
  //   if (tgdk >= 10){
  //     tgdk = Number(operate[0]) + Number(operate[1]);
  //   }
  //   return tgdk;
  // }

  // // tslint:disable-next-line:typedef
  // submit(form: NgForm) {
  //   // this.num = form.value.num;
  //   // this.sum = this.heightco(this.num[0]) +
  //   //   this.heightco(this.num[1]) +
  //   //   this.heightco(this.num[2]) +
  //   //   this.heightco(this.num[3]) +
  //   //   this.heightco(this.num[4]) +
  //   //   this.heightco(this.num[5]) +
  //   //   this.heightco(this.num[6]);
  //   // 2362146 6
  //   // 1211212
  //   // 2 6 6 2 2 4 1 2
  //   // 24
  //   // 30
  //   // 30-24
  //   // 6
  //   // for (this.tgdk = 0; this.sum % 10 !== 0; this.check++) {
  //   //   this.sum++;
  //   // }
  //   // alert(this.sum);
  //   // while (this.sum % 10 !== 0){
  //   //   this.sum++;
  //   //   this.check++;
  //   // }
  //   // if (this.check === Number(form.value.num[7])) {
  //
  //   this.check = 0;
  //   // } else {
  //   //   this.check = 0;
  //   //   alert('Write correct Number!');
  // // }
  // }
  // while (sum % 10 !== 0){
  //   sum++;
  //   check++;
  // }
  // tslint:disable-next-line:typedef
  delete(vagon: Vagon){ // Item to remove
    this.vagons = this.vagons.filter(obj => obj !== vagon);
  }
  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:typedef
  submit2() {
    this.actionVagon = new Vagon(this.myForm.value.vagonNum, this.myForm.value.vagonManufacturer,
      this.myForm.value.vagonStatement, this.type);
    this.actionVagon.correctType();
    // tslint:disable-next-line:max-line-length
    this.vagons.push(this.actionVagon);
  }
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

  ngOnInit(): void {
    this.myForm = new FormGroup({
      vagonNum: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)], this.VagonNumValidator()),
      vagonManufacturer: new FormControl(' ', Validators.required),
      vagonStatement: new FormControl('', Validators.required)
    });
    this.editVagon = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)], this.VagonNumValidator());
  }
}

