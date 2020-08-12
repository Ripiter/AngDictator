import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictatorFormComponent } from './dictator-form.component';

describe('DictatorFormComponent', () => {
  let component: DictatorFormComponent;
  let fixture: ComponentFixture<DictatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
