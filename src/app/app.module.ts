import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AlgorithmComponent } from './pages/algorithm/algorithm.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BinarySearchAnimationComponent } from './components/binary-search-animation/binary-search-animation.component';
import { BinarySearchPageComponent } from './pages/binary-search-page/binary-search-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuickSortPageComponent } from './pages/quick-sort-page/quick-sort-page.component';
import { QuickSortAnimationComponent } from './components/quick-sort-animation/quick-sort-animation.component';
import { DepthFirstSearchComponent } from './pages/depth-first-search/depth-first-search.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { DepthFirstSearchAnimationComponent } from './components/depth-first-search-animation/depth-first-search-animation.component';
import { BreadthFirstSearchAnimationComponent } from './components/breadth-first-search-animation/breadth-first-search-animation.component';
import { BreadthFirstSearchPageComponent } from './pages/breadth-first-search-page/breadth-first-search-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlgorithmComponent,
    NavbarComponent,
    BinarySearchAnimationComponent,
    BinarySearchPageComponent,
    FooterComponent,
    QuickSortPageComponent,
    QuickSortAnimationComponent,
    DepthFirstSearchComponent,
    SearchResultsComponent,
    DepthFirstSearchAnimationComponent,
    BreadthFirstSearchAnimationComponent,
    BreadthFirstSearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
