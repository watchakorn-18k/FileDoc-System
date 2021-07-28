import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocReceiverComponent } from './doc-receiver.component';

describe('DocReceiverComponent', () => {
  let component: DocReceiverComponent;
  let fixture: ComponentFixture<DocReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocReceiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
