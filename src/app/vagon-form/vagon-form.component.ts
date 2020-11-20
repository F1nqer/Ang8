import { Component, OnInit } from '@angular/core';
import {Vagon} from '../vagon';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-vagon',
  templateUrl: './vagon-form.component.html',
  styleUrls: ['./vagon-form.component.css']
})
export class VagonComponent implements OnInit {
  manufacturer: string;
  num: number;
  statement: string;
  type: string;
  vagons: Vagon[] = [];
  sum: number;
  checksum: number;
  check = 0;
  tgdk: number;
  statements  = ['Good', 'Broken', 'In repairing', 'Can use'];
  // tslint:disable-next-line:typedef
  // checksum(oper: number){
  //   while (oper % 10 !== 0){
  //     oper++;
  //     this.check++;
  //   }
  // }
  // tslint:disable-next-line:typedef
  heightco(operate: number): number{
    if (operate % 2 === 0){
      operate *= 1;
    }
    else{
      operate *= 2;
    }
    if (operate > 10){
      operate = operate[0] + operate[1];
    }
    return operate;
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

    // for (this.tgdk = 0; this.sum % 10 !== 0; this.check++) {
    //   this.sum++;
    // }
    while (this.sum % 10 !== 0){
      this.sum++;
      this.check++;
    }
    if (this.check === form.value.num[7]) {
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
    } else {
      alert('Write correct Number!');
    }
  }
  ngOnInit(): void {
  }

}
