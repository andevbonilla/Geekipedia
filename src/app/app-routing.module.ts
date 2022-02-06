import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgorithmComponent } from './pages/algorithm/algorithm.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'algorithm/:name', component: AlgorithmComponent },
  { path: 'results/:query', component: SearchResultsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
