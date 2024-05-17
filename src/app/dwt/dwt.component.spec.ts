import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwtComponent } from './dwt.component';

describe('DwtComponent', () => {
  let component: DwtComponent;
  let fixture: ComponentFixture<DwtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DwtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
