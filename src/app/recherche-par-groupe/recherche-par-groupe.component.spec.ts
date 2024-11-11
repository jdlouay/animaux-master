import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParGroupeComponent } from './recherche-par-groupe.component';

describe('RechercheParGroupeComponent', () => {
  let component: RechercheParGroupeComponent;
  let fixture: ComponentFixture<RechercheParGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercheParGroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheParGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
