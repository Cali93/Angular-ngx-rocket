import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideinfosComponent } from './sideinfos.component';

describe('SideinfosComponent', () => {
  let component: SideinfosComponent;
  let fixture: ComponentFixture<SideinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
