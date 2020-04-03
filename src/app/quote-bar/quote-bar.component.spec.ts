import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteBarComponent } from './quote-bar.component';

describe('QuoteBarComponent', () => {
  let component: QuoteBarComponent;
  let fixture: ComponentFixture<QuoteBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
