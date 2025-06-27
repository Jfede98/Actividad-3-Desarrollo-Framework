import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcusticosComponent } from './acusticos.component';

describe('AcusticosComponent', () => {
  let component: AcusticosComponent;
  let fixture: ComponentFixture<AcusticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcusticosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcusticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

