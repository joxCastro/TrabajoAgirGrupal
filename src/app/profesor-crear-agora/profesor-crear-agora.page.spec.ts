import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfesorCrearAgoraPage } from './profesor-crear-agora.page';

describe('ProfesorCrearAgoraPage', () => {
  let component: ProfesorCrearAgoraPage;
  let fixture: ComponentFixture<ProfesorCrearAgoraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorCrearAgoraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfesorCrearAgoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
