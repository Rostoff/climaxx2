import { Component, OnInit } from '@angular/core';
import { Produit } from '../Models/produit';
import { DataAccessService } from '../data-access.service';

@Component({
  selector: 'app-eventail',
  templateUrl: './eventail.component.html',
  styleUrls: ['./eventail.component.css']
})
export class EventailComponent implements OnInit {

  eventails: Produit[];
  constructor(private service: DataAccessService ) { }

  ngOnInit() {
    this.service.getEventail().subscribe((eventails)=>{
      this.eventails=eventails;
    });
  }


}
