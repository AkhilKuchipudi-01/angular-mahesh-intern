import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPage } from './get-page';

describe('GetPage', () => {
  let component: GetPage;
  let fixture: ComponentFixture<GetPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
