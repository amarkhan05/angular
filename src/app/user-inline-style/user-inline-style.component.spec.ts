import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInlineStyleComponent } from './user-inline-style.component';

describe('UserInlineStyleComponent', () => {
  let component: UserInlineStyleComponent;
  let fixture: ComponentFixture<UserInlineStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInlineStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInlineStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
