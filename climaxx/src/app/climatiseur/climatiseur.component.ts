import { Component, OnInit } from '@angular/core';
import { Produit } from '../Models/produit';
import { DataAccessService } from '../data-access.service';

@Component({
  selector: 'app-climatiseur',
  templateUrl: './climatiseur.component.html',
  styleUrls: ['./climatiseur.component.css']
})
export class ClimatiseurComponent implements OnInit {

  climatiseurs: Produit[];
  constructor(private service: DataAccessService ) { }

  ngOnInit() {
    this.service.getClimatiseurs().subscribe((climatiseurs)=>{
      this.climatiseurs=climatiseurs;
    });
  }
}
