import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDescription } from './feature-description';

describe('FeatureDescription', () => {
  let component: FeatureDescription;
  let fixture: ComponentFixture<FeatureDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
