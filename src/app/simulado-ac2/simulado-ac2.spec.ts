import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimuladoAc2 } from './simulado-ac2';

describe('SimuladoAc2', () => {
  let component: SimuladoAc2;
  let fixture: ComponentFixture<SimuladoAc2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimuladoAc2],
    }).compileComponents();

    fixture = TestBed.createComponent(SimuladoAc2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
