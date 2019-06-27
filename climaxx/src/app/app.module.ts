import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MenuComponent } from './menu/menu.component';
import { VentilateurComponent } from './ventilateur/ventilateur.component';
import { BrumisateurComponent } from './brumisateur/brumisateur.component';
import { ClimatiseurComponent } from './climatiseur/climatiseur.component';
import { ClimatiseurEcoloComponent } from './climatiseur-ecolo/climatiseur-ecolo.component';
import { EventailComponent } from './eventail/eventail.component';
import { BlogComponent } from './blog/blog.component';
import { PanierComponent } from './panier/panier.component';
import { GestionCompteComponent } from './gestion-compte/gestion-compte.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    MenuComponent,
    VentilateurComponent,
    BrumisateurComponent,
    ClimatiseurComponent,
    ClimatiseurEcoloComponent,
    EventailComponent,
    BlogComponent,
    PanierComponent,
    GestionCompteComponent,
    RechercheComponent,
    ConnexionComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
