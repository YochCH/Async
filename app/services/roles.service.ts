import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Role {
  id:number,
  description:string

}

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  getRoles() {
   
    return this.httpService.get<Role[]>('/assets/Role.json');
  }

  
  constructor(private httpService: HttpClient) { 
    
  }
}