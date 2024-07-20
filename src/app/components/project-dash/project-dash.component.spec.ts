import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDashComponent } from './project-dash.component';

describe('ProjectDashComponent', () => {
  let component: ProjectDashComponent;
  let fixture: ComponentFixture<ProjectDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
