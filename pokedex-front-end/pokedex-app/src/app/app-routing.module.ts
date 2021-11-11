import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: 'team',
    component: TeamListComponent,
  },
  {
    path: 'pokedex',
    component: PokemonListComponent,
  },
  {
    path: 'trainer',
    component: TrainerListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
