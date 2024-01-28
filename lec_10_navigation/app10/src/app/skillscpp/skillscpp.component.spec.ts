import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillscppComponent } from './skillscpp.component';

describe('SkillscppComponent', () => {
  let component: SkillscppComponent;
  let fixture: ComponentFixture<SkillscppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillscppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillscppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
