import { Autor } from './../model/autor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorsService {

  constructor() { }

  public getAutors() : Autor[] {
    return [
      { name: "Ala" },
      { name: "Adam" },
      { name: "Nikifor" }
    ];
  }
}
