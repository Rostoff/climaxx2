import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimatiseurEcoloComponent } from './climatiseur-ecolo.component';

describe('ClimatiseurEcoloComponent', () => {
  let component: ClimatiseurEcoloComponent;
  let fixture: ComponentFixture<ClimatiseurEcoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimatiseurEcoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimatiseurEcoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
