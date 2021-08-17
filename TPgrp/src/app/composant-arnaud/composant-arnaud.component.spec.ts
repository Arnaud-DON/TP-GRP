import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantArnaudComponent } from './composant-arnaud.component';

describe('ComposantArnaudComponent', () => {
  let component: ComposantArnaudComponent;
  let fixture: ComponentFixture<ComposantArnaudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantArnaudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantArnaudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
