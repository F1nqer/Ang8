import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagonComponent } from './vagon-form.component';

describe('VagonComponent', () => {
  let component: VagonComponent;
  let fixture: ComponentFixture<VagonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
