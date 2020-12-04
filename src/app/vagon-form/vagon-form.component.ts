import {Component, OnInit} from '@angular/core';
import {Vagon} from '../vagon';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {CarriageService} from '../carriage.service';
import {CarriageValidatorService} from '../carriage-validator.service';
@Component({
  selector: 'app-vagon',
  templateUrl: './vagon-form.component.html',
  styleUrls: ['./vagon-form.component.css'],
  providers: [CarriageValidatorService]
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
  constructor(private carriageService: CarriageService, private carriAgeValidatorService: CarriageValidatorService) {

  }
  // tslint:disable-next-line:typedef
  show(num: Vagon){
    this.editVagonShow = num;
  }
  // tslint:disable-next-line:typedef
  delete(vagon: Vagon){
    this.vagons = this.carriageService.deleteVagon(vagon);;
  }
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
  ngOnInit(): void {
    this.myForm = new FormGroup({
      // tslint:disable-next-line:max-line-length
      vagonNum: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)], this.carriAgeValidatorService.VagonNumValidator()),
      vagonManufacturer: new FormControl(' ', Validators.required),
      vagonStatement: new FormControl('', Validators.required)
    });
    this.VagonEditForm = new FormGroup({
      // tslint:disable-next-line:max-line-length
      vagonNum: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)], this.carriAgeValidatorService.VagonNumValidator()),
      vagonManufacturer: new FormControl(' ', Validators.required),
      vagonStatement: new FormControl('', Validators.required)
    });
    this.vagons = this.carriageService.getVagons();
    // tslint:disable-next-line:max-line-length
    this.editVagon = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)], this.carriAgeValidatorService.VagonNumValidator());
  }
}

