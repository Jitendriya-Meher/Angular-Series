import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillscComponent } from './skillsc.component';

describe('SkillscComponent', () => {
  let component: SkillscComponent;
  let fixture: ComponentFixture<SkillscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
