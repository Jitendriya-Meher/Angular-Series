import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsreactComponent } from './skillsreact.component';

describe('SkillsreactComponent', () => {
  let component: SkillsreactComponent;
  let fixture: ComponentFixture<SkillsreactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsreactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsreactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
