import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', component: HeroDetailsComponent },
    { path: '404', component: PageNotFoundComponent},
    { path: '', pathMatch: 'full', redirectTo: 'heroes' },
    { path: '**', pathMatch: 'full', redirectTo: '404' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
