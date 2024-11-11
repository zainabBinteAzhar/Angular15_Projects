import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLikedBlogsComponent } from './user-liked-blogs.component';

describe('UserLikedBlogsComponent', () => {
  let component: UserLikedBlogsComponent;
  let fixture: ComponentFixture<UserLikedBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLikedBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLikedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
