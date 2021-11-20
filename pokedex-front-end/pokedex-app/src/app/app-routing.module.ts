import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForrestComponent } from 'src/environments/forrest/forrest.component';

const routes: Routes = [
  {
    path: 'pokemon',
    component: PokemonListComponent
  },
  {
    path: 'pokemon/:pokemonName',
    component: PokemonDetailComponent
  },
  {
    path: 'team/:teamId',
    component: TeamDetailComponent
  },
  {
    path: 'teams',
    component: TeamListComponent
  },
  {
    path: 'trainers',
    component: TrainerListComponent
  },{
    path: 'forrest',
    component: ForrestComponent
  },
  {
    path: '',
    component: PokemonListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
