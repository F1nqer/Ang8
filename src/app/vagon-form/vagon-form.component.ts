import {Component, OnInit} from '@angular/core';
import {Vagon} from '../vagon';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {CarriageService} from '../carriage.service';
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
  vagons: Vagon[];
  sum: number;
  checksum: number;
  check = 0;
  tgdk: number;
  statements = ['Good', 'Broken', 'In repairing', 'Can use'];
  myForm: FormGroup;
  VagonEditForm: FormGroup;
  editVagonShow: Vagon;
  editVagon: FormControl;
  constructor(private carriageService: CarriageService) {

  }
  // tslint:disable-next-line:typedef
  show(num: Vagon){
    this.editVagonShow = num;
  }
  // tslint:disable-next-line:typedef
  delete(vagon: Vagon){
    console.log(this.vagons);
    this.carriageService.deleteVagon(vagon);
    this.vagons = this.carriageService.getVagons();
    console.log(this.vagons);
    // Item to remove
    // this.vagons = this.vagons.filter(obj => obj !== vagon);
  }
  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:typedef
  submit2() {
    this.carriageService.addVagon(new Vagon(this.myForm.value.vagonNum, this.myForm.value.vagonManufacturer,
      this.myForm.value.vagonStatement, this.type));
  }
  // tslint:disable-next-line:typedef
  submitEdit(vagon: Vagon) {
    this.actionVagon = new Vagon(this.VagonEditForm.value.vagonNum, this.VagonEditForm.value.vagonManufacturer,
      this.VagonEditForm.value.vagonStatement, this.type, vagon.id);
    // tslint:disable-next-line:max-line-length
    this.carriageService.updateVagons(vagon);
    console.log(this.actionVagon);
    this.vagons = this.carriageService.getVagons();
    console.log(this.vagons);
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

    this.VagonEditForm = new FormGroup({
      vagonNum: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)], this.VagonNumValidator()),
      vagonManufacturer: new FormControl(' ', Validators.required),
      vagonStatement: new FormControl('', Validators.required)
    });
    this.vagons = this.carriageService.getVagons();
    this.editVagon = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)], this.VagonNumValidator());
  }
}

