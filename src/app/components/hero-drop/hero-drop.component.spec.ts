import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDropComponent } from './hero-drop.component';

describe('HeroDropComponent', () => {
  let component: HeroDropComponent;
  let fixture: ComponentFixture<HeroDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
