import { Component, OnInit } from '@angular/core';
import { Produit } from '../Models/produit';
import { DataAccessService } from '../data-access.service';

@Component({
  selector: 'app-climatiseur-ecolo',
  templateUrl: './climatiseur-ecolo.component.html',
  styleUrls: ['./climatiseur-ecolo.component.css']
})
export class ClimatiseurEcoloComponent implements OnInit {

  climatiseursEcolo: Produit[];
  constructor(private service: DataAccessService ) { }

  ngOnInit() {
    this.service.getClimatiseursEcolo().subscribe((climatiseursEcolo)=>{
      this.climatiseursEcolo=climatiseursEcolo;
    });
  }

}
