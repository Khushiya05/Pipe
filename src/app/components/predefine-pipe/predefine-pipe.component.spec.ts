import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinePipeComponent } from './predefine-pipe.component';

describe('PredefinePipeComponent', () => {
  let component: PredefinePipeComponent;
  let fixture: ComponentFixture<PredefinePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredefinePipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredefinePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
