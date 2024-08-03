import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempConvertComponent } from './temp-convert.component';

describe('TempConvertComponent', () => {
  let component: TempConvertComponent;
  let fixture: ComponentFixture<TempConvertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TempConvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});