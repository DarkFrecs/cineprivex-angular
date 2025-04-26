import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedGirlsComponent } from './verified-girls.component';

describe('VerifiedGirlsComponent', () => {
  let component: VerifiedGirlsComponent;
  let fixture: ComponentFixture<VerifiedGirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifiedGirlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedGirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
