import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootComponent } from './boot.component';

describe('BootComponent', () => {
  let component: BootComponent;
  let fixture: ComponentFixture<BootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootComponent]
    });
    fixture = TestBed.createComponent(BootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
