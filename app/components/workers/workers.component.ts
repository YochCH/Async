import { Component, OnInit } from '@angular/core';
import { WorkersService, Worker } from 'src/app/services/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers: Worker[] = [];

  // di - dependency injection - תלות לפי דרישה
  constructor(private serviceWorkers: WorkersService) {
    this.serviceWorkers.getWorkers()
    // רישום לאובסרבל
    // ניתן לשלוח לו כפרמטר רק פונקציה אחת שתשמש בתור פונקציית next
    // תופעל כאשר יגיעו ערכים, ותקבל כפרמטר את הערכים שהגיעו
    .subscribe((workers) => this.workers = workers);

    
  }


  ngOnInit(): void {
  }

}
