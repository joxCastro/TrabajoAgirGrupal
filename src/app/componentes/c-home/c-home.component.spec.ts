import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CHomeComponent } from './c-home.component';

describe('CHomeComponent', () => {
  let component: CHomeComponent;
  let fixture: ComponentFixture<CHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CHomeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('El componente c-home se ejecuta', () => {
    const prueba = TestBed.createComponent(CHomeComponent);
    const app = prueba.componentInstance;
    expect(app).toBeTruthy();
  });*/
});
