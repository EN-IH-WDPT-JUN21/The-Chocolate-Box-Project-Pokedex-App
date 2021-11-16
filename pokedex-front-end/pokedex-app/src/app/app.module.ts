import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { TeamListItemComponent } from './components/team-list-item/team-list-item.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { TrainerListItemComponent } from './components/trainer-list-item/trainer-list-item.component';
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './components/trainer-detail/trainer-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatGridListModule} from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListItemComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    TeamListItemComponent,
    TeamListComponent,
    TeamDetailComponent,
    TrainerListItemComponent,
    TrainerListComponent,
    TrainerDetailComponent,
    HeaderComponent,
    FooterComponent,
    PokemonSearchComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
