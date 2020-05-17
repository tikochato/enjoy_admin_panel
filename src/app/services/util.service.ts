import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  report: any;
  constructor(

  ) { }


  setReport(data) {
    this.report = data;
  }

  getReport() {
    return this.report;
  }
}
