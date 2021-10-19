import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-hero-drop',
  templateUrl: './hero-drop.component.html',
  styleUrls: ['./hero-drop.component.scss']
})
export class HeroDropComponent implements OnInit {
  @Input('hero') hero: Hero = new Hero;
  drop: string = '';

  constructor() { }

  ngOnInit(): void {
    this.drop = `${this.hero.drop.path}.${this.hero.drop.extension}`
    }
  

}
