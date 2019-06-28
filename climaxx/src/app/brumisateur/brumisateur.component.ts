import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../data-access.service';
import { Produit } from '../Models/produit';

@Component({
  selector: 'app-brumisateur',
  templateUrl: './brumisateur.component.html',
  styleUrls: ['./brumisateur.component.css']
})
export class BrumisateurComponent implements OnInit {

  brumisateurs: Produit[];
  constructor(private service: DataAccessService ) { }

  ngOnInit() {
    this.service.getBrumisateurs().subscribe((brumisateurs)=>{
      this.brumisateurs=brumisateurs;
      console.log(this.brumisateurs);
    });
  }

}
