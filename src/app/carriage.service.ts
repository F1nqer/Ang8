import { Injectable } from '@angular/core';
import {Vagon} from './vagon';

@Injectable({
  providedIn: 'root'
})
export class CarriageService {
  vagons: Vagon[] = [];
  // tslint:disable-next-line:typedef
  addVagon(vagon: Vagon){
    vagon.id = this.vagons.length;
    this.vagons.push(vagon);
  }
  // tslint:disable-next-line:typedef
  getVagons(){
    return this.vagons;
  }
  // tslint:disable-next-line:typedef
  updateVagons(vagon: Vagon){
    // for (let v of this.vagons){
    //   if (v.id === vagon.id){
    //     v = vagon;
    //   }
    // }
    for (let i = 0; i < this.vagons.length; i++){
      if (this.vagons[i].id !== vagon.id) { continue; }

      this.vagons[i] = vagon;
      return this.vagons;
    }
  }
    // const testList = this.vagons.map(o => {
    //   if (o.id === vagon.id) {
    //     return vagon;
    //   }
    //   return o;
    // });
    // this.vagons = testList;
    // for (let i = 0; i < this.vagons.length; i++){
    //   if (this.vagons[i].id === vagon.id){
    //     this.vagons[i] = vagon;
    //     console.log(vagon);
    //   }
    // }
  // tslint:disable-next-line:typedef
  deleteVagon(vagon: Vagon){ // Item to remove
    this.vagons = this.vagons.filter(obj => obj !== vagon);
  }

  constructor() { }
}
