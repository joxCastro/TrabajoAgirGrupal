import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './login-routing.module';
import { BdLocalService } from '../services/bd-local.service';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage, BdLocalService],
      imports: [IonicModule.forRoot(), CommonModule,
                FormsModule, LoginPageRoutingModule, ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('pruebas Login page sistem', () => {
    it('Login creado --1 resolucion pendiente', () => {
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });
  });

//  it('ingresar usuario admin', () => {
//    fixture = TestBed.createComponent(LoginPage);
//    component = fixture.componentInstance;
//    fixture.detectChanges();

//    const persona = JSON.parse(localStorage.getItem('persona'));
//    const est = persona.estado;
//    const per = persona.usuario;
//    const pas = persona.password;
//    per.setValues('admin');
//    pas.setValues('admin');
//    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//    expect(est).toBeTrue;
//  });

});
