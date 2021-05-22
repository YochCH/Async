import { Component, OnInit } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showWorkers=false
  showRoles=false

  setWorkers=()=>{
    this.showWorkers=!this.showWorkers
    console.log(this.showWorkers)

  }

  setRoles=()=>{
    this.showRoles=!this.showRoles
  }
 
  
  ngOnInit(): void {
    
  }
}
