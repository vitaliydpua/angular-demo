import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDemoComponent } from './directive-demo.component';

describe('DirectiveDemoComponent', () => {
  let component: DirectiveDemoComponent;
  let fixture: ComponentFixture<DirectiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
