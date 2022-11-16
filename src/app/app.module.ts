import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { Tiles2Component } from './components/tiles2/tiles2.component';
import { MiniTileComponent } from './components/mini-tile/mini-tile.component';
import { MiniSliderComponent } from './components/mini-slider/mini-slider.component';
import { SideNavDirectionComponent } from './components/menu/side-nav-direction/side-nav-direction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MenuComponent,
    SliderComponent,
    HomeComponent,
    TilesComponent,
    Tiles2Component,
    MiniTileComponent,
    MiniSliderComponent,
    SideNavDirectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
