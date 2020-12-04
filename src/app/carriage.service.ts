import { Injectable } from '@angular/core';
import {Vagon} from './vagon';
import {LoggerService} from './logger.service';
@Injectable({
  providedIn: 'root'
})
export class CarriageService {
  vagons: Vagon[] = [];
  // tslint:disable-next-line:typedef
  addVagon(vagon: Vagon){
    vagon.id = this.vagons.length;
    this.vagons.push(vagon);
    this.loggerService.write('Операция добавления вагона');
  }
  // tslint:disable-next-line:typedef
  getVagons(){
    this.loggerService.write('Операция получения вагонов');
    return this.vagons;
  }
  // tslint:disable-next-line:typedef
  updateVagons(vagon: Vagon): Vagon[] {
    this.loggerService.write('Операция обновления вагона');
    for (let i = 0; i < this.vagons.length; i++) {
          if (this.vagons[i].id === vagon.id) {
            this.vagons[i] = vagon;
            console.log(vagon);
          }
        }
    return this.vagons;
    // for (let v of this.vagons){
    //   if (v.id === vagon.id){
    //     v = vagon;
    //   }
    // }
    // const testList = this.vagons.map(o => {
    //   if (o.id === vagon.id) {
    //     return vagon;
    //   }
    //   return o;
    // });
    // this.vagons = testList;
  }
  // tslint:disable-next-line:typedef
  deleteVagon(vagon: Vagon){ // Item to remove
    this.loggerService.write('Операция удаления вагона');
    this.vagons = this.vagons.filter(obj => obj !== vagon);
    return this.vagons;
  }

  constructor(private loggerService: LoggerService) {

  }
}
