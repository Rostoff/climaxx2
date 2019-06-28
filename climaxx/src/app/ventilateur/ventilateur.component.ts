import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { DataAccessService } from '../data-access.service';

@Component({
  selector: 'app-ventilateur',
  templateUrl: './ventilateur.component.html',
  styleUrls: ['./ventilateur.component.css']
})
export class VentilateurComponent implements OnInit {

  ventilateurs: Produit[];
  constructor(private service: DataAccessService ) { }

  ngOnInit() {
    this.service.getVentilateurs().subscribe((ventilateurs)=>{
      this.ventilateurs=ventilateurs;
    });
  }

}
