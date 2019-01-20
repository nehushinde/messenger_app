import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMsgComponent } from './text-msg.component';

describe('TextMsgComponent', () => {
  let component: TextMsgComponent;
  let fixture: ComponentFixture<TextMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
