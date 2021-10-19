import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
    @Input('hero') hero: Hero = new Hero;
    tail: string = '';

    constructor() { }

    ngOnInit(): void {
    }

}
