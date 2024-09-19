import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerSponsorComponent } from './partner-sponsor.component';

describe('PartnerSponsorComponent', () => {
  let component: PartnerSponsorComponent;
  let fixture: ComponentFixture<PartnerSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerSponsorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
