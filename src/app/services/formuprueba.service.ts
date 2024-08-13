import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormupruebaService {

  private FormupruebaService = new BehaviorSubject<any>(null);
  currentFormData = this.FormupruebaService.asObservable();

  constructor() { }

  updateFormData(data: any) {
    this.FormupruebaService.next(data);
  }
}
