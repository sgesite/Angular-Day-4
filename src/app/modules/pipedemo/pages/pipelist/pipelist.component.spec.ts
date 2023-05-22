import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelistComponent } from './pipelist.component';

describe('PipelistComponent', () => {
  let component: PipelistComponent;
  let fixture: ComponentFixture<PipelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipelistComponent]
    });
    fixture = TestBed.createComponent(PipelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
