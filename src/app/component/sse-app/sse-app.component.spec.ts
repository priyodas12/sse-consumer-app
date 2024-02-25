import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SseAppComponent } from './sse-app.component';

describe('SseAppComponent', () => {
  let component: SseAppComponent;
  let fixture: ComponentFixture<SseAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SseAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SseAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
