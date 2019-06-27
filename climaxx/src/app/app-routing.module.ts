import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrumisateurComponent } from './brumisateur/brumisateur.component';
import { EventailComponent } from './eventail/eventail.component';
import { ClimatiseurComponent } from './climatiseur/climatiseur.component';
import { ClimatiseurEcoloComponent } from './climatiseur-ecolo/climatiseur-ecolo.component';
import { VentilateurComponent } from './ventilateur/ventilateur.component';
import { PanierComponent } from './panier/panier.component';
import { BlogComponent } from './blog/blog.component';
import { GestionCompteComponent } from './gestion-compte/gestion-compte.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  { path: 'Brumisateur', component: BrumisateurComponent },
  { path: 'Eventail', component: EventailComponent },
  { path: 'Climatiseur', component: ClimatiseurComponent  },
  { path: 'ClimatiseurEcolo', component: ClimatiseurEcoloComponent },
  { path: 'Ventilateur', component: VentilateurComponent },
  { path: 'Panier', component:  PanierComponent},
  { path: 'Blog', component: BlogComponent },
  { path: 'GestionCompte', component: GestionCompteComponent  },
  { path: 'Recherche', component: RechercheComponent },
  { path: 'Connexion', component: ConnexionComponent },
  { path: 'Accueil', component: AccueilComponent },
  { path: '', redirectTo: '/Accueil', pathMatch: 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
