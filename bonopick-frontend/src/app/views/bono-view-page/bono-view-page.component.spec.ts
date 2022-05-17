import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoViewPageComponent } from './bono-view-page.component';

describe('BonoViewPageComponent', () => {
  let component: BonoViewPageComponent;
  let fixture: ComponentFixture<BonoViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonoViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
