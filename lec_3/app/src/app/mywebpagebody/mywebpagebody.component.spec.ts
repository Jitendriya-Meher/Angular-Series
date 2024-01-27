import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MywebpagebodyComponent } from './mywebpagebody.component';

describe('MywebpagebodyComponent', () => {
  let component: MywebpagebodyComponent;
  let fixture: ComponentFixture<MywebpagebodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MywebpagebodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MywebpagebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
