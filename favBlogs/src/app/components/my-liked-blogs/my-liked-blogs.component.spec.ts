import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLikedBlogsComponent } from './my-liked-blogs.component';

describe('MyLikedBlogsComponent', () => {
  let component: MyLikedBlogsComponent;
  let fixture: ComponentFixture<MyLikedBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLikedBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLikedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
