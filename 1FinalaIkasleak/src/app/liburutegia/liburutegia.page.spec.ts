import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiburutegiaPage } from './liburutegia.page';

describe('LiburutegiaPage', () => {
  let component: LiburutegiaPage;
  let fixture: ComponentFixture<LiburutegiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LiburutegiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
