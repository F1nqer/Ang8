import { Component, OnInit } from '@angular/core';
import {Vagon} from '../vagon';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-vagon',
  templateUrl: './vagon-form.component.html',
  styleUrls: ['./vagon-form.component.css']
})
export class VagonComponent implements OnInit {
  manufacturer: string;
  num: string;
  statement: string;
  type: string;
  vagons: Vagon[] = [];
  sum: number;
  checksum: number;
  check = 0;
  tgdk: number;
  statements  = ['Good', 'Broken', 'In repairing', 'Can use'];
  // myForm: FormGroup;
  // tslint:disable-next-line:typedef
  // checksum(oper: number){
  //   while (oper % 10 !== 0){
  //     oper++;
  //     this.check++;
  //   }
  // }
  // tslint:disable-next-line:typedef
  heightco(operate: string): number{
    this.tgdk = Number(operate);
    if (this.tgdk % 2 === 0){
      this.tgdk *= 1;
    }
    else{
      this.tgdk *= 2;
    }
    operate = String(this.tgdk);
    if (this.tgdk >= 10){
      this.tgdk = Number(operate[0]) + Number(operate[1]);
    }
    return this.tgdk;
  }
  // tslint:disable-next-line:typedef
  submit(form: NgForm) {
    this.num = form.value.num;
    this.sum = this.heightco(this.num[0]) +
      this.heightco(this.num[1]) +
      this.heightco(this.num[2]) +
      this.heightco(this.num[3]) +
      this.heightco(this.num[4]) +
      this.heightco(this.num[5]) +
      this.heightco(this.num[6]);
    // 23621457 7
    // 1211212
    // 2 6 6 2 2 4 1+0
    // 23
    // 30
    // 30-23
    // 7
    // for (this.tgdk = 0; this.sum % 10 !== 0; this.check++) {
    //   this.sum++;
    // }
    alert(this.sum);
    while (this.sum % 10 !== 0){
      this.sum++;
      this.check++;
    }
    if (this.check === Number(form.value.num[7])) {
      switch (form.value.num[0]) {
        case '2': {
          this.type = 'Крытый грузовой вагон';
          break;
        }
        case '3': {
          this.type = 'Специализированный вагон';
          break;
        }
        case '4': {
          this.type = 'Платформа';
          break;
        }
        case '5': {
          this.type = 'Платформа';
          break;
        }
        case '6': {
          this.type = 'Полувагон';
          break;
        }
        case '7': {
          this.type = 'Цистерна';
          break;
        }
        case '8': {
          this.type = 'Изотермический вагон';
          break;
        }
        case '9': {
          this.type = 'Специализированный вагон';
          break;
        }
        default: {
          this.type = 'Неизвестный вагон';
          break;
        }
      }
      this.vagons.push(new Vagon(form.value.num, form.value.manufacturer, form.value.statement, this.type));
      this.check = 0;
    } else {
      this.check = 0;
      alert('Write correct Number!');
    }
  }
  constructor() {
    // this.myForm = new FormGroup({
    //   vagonNum: new FormControl('Tom', [Validators.required, this.vagonNumValidator]),
    //   vagonName: new FormControl('', Validators.required)
    // });
  }
  // vagonNumValidator(control: FormControl): {[s: string]: boolean}{
  //   this.num = control.value;
  //   this.sum = this.heightco(this.num[0]) +
  //     this.heightco(this.num[1]) +
  //     this.heightco(this.num[2]) +
  //     this.heightco(this.num[3]) +
  //     this.heightco(this.num[4]) +
  //     this.heightco(this.num[5]) +
  //     this.heightco(this.num[6]);
  //   while (this.sum % 10 !== 0){
  //     this.sum++;
  //     this.check++;
  //   }
  //   if (this.check === Number(control.value[7])){
  //     return {vagonNum: true};
  //   }
  //   return null;
  // }
  ngOnInit(): void {
  }

}
