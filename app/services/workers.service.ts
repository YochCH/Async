import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Worker {
  name:string,
  id:number,
  role:number,
  salary:number

}

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  getWorkers() {
   
    return this.httpService.get<Worker[]>('/assets/workers.json');
  }

  
  constructor(private httpService: HttpClient) { 
    
  }
}