export class Vagon {

  constructor(
    public num: number,
    public manufacturer: string,
    public statement: string,
    public type: string,
    public id?: number
  ) {  this.correctType(); }
  // tslint:disable-next-line:typedef
  correctType(){
    const check = String(this.num);
    switch (check[0]) {
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
  }

}
