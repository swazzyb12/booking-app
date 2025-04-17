import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPreviewComponent } from './brand-preview.component';

describe('BrandPreviewComponent', () => {
  let component: BrandPreviewComponent;
  let fixture: ComponentFixture<BrandPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
