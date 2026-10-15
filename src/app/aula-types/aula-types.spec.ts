import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AulaTypes } from './aula-types';

describe('AulaTypes', () => {
  let component: AulaTypes;
  let fixture: ComponentFixture<AulaTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AulaTypes],
    }).compileComponents();

    fixture = TestBed.createComponent(AulaTypes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
