import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedLibroComponent } from './detailed-libro.component';

describe('DetailedLibroComponent', () => {
  let component: DetailedLibroComponent;
  let fixture: ComponentFixture<DetailedLibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedLibroComponent]
    });
    fixture = TestBed.createComponent(DetailedLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
