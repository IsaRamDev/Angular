import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MarvelService } from './services/marvel.service';
import { AuthService } from './services/auth/auth.service';

import { PipeExPipe } from './pipes/pipe-ex.pipe';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import { HeroDropComponent } from './components/hero-drop/hero-drop.component';
import { PipeUpperPipe } from './pipes/pipe-upper.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        PageNotFoundComponent,
        HeroCardComponent,
        PipeExPipe,
        HeroDetailsComponent,
        HeroDropComponent,
        PipeUpperPipe
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatCardModule,
        MatButtonModule
    ],
    providers: [MarvelService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
