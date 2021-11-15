import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'team/:teamId',
    component: TeamDetailComponent
  },
  {
    path: 'teams',
    component: TeamListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
