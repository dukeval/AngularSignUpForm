import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpTCComponent } from './sign-up-tc.component';

describe('SignUpTCComponent', () => {
  let component: SignUpTCComponent;
  let fixture: ComponentFixture<SignUpTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpTCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
