import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiclistComponent } from './comiclist.component';

describe('ComiclistComponent', () => {
  let component: ComiclistComponent;
  let fixture: ComponentFixture<ComiclistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComiclistComponent]
    });
    fixture = TestBed.createComponent(ComiclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
