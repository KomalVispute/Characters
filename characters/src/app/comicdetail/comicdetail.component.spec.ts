import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicdetailComponent } from './comicdetail.component';

describe('ComicdetailComponent', () => {
  let component: ComicdetailComponent;
  let fixture: ComponentFixture<ComicdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicdetailComponent]
    });
    fixture = TestBed.createComponent(ComicdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
