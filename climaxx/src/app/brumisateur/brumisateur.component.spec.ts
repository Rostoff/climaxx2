import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrumisateurComponent } from './brumisateur.component';

describe('BrumisateurComponent', () => {
  let component: BrumisateurComponent;
  let fixture: ComponentFixture<BrumisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrumisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrumisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
