import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionV1 } from './submission-v1';

describe('SubmissionV1', () => {
  let component: SubmissionV1;
  let fixture: ComponentFixture<SubmissionV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionV1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
