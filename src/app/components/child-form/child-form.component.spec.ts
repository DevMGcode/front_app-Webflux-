import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFormComponent } from './child-form.component';

describe('ChildFormComponent', () => {
  let component: ChildFormComponent;
  let fixture: ComponentFixture<ChildFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
