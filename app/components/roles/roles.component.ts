import { Component, OnInit } from '@angular/core';
import { Role, RolesService } from 'src/app/services/roles.service';
import { WorkersService, Worker } from 'src/app/services/workers.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  
  


  roles: Role[] = [];
  workers: Worker[] = [];
  rolesAvg: {role:string,sum:number,count:number}[]=[];
  hasRoles=false
  hasWorkers=false


  calc=()=>{
    if(this.hasWorkers&&this.hasRoles){
    
         this.roles.forEach( r=>{
          this.rolesAvg.push({
            role:r.description,
            sum:0,
            count:0
          })
        })
    
        this.workers.forEach(w=>{
          this.rolesAvg[w.role-1].sum+=w.salary;
          this.rolesAvg[w.role-1].count++;
        }
        );
  }
}

  constructor(private serviceRoles: RolesService,private serviceWorkers: WorkersService) {


    this.serviceRoles.getRoles()
      .subscribe((roles) => {
      this.roles = roles
      this.hasRoles=true
      this.calc()
    });

    this.serviceWorkers.getWorkers()
      .subscribe((workers) => {
        this.workers = workers
        this.hasWorkers=true
        this.calc()
      })

   
    




   


    
  }

  ngOnInit(): void {
  }

}
