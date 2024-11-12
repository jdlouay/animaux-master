import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGroupesComponent } from './liste-groupes.component';

describe('ListeGroupesComponent', () => {
  let component: ListeGroupesComponent;
  let fixture: ComponentFixture<ListeGroupesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeGroupesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeGroupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
