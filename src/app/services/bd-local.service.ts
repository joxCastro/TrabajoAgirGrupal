import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { IUsuario } from '../interfaces/iusuario';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  usuario: IUsuario[] = [{ strUsuario: 'admin', strPassword: 'asd', bolEstado: false},
                          {strUsuario: 'usuario', strPassword: 'asd', bolEstado: false},
                          {strUsuario: 'profesor', strPassword: 'profesor', bolEstado: false}];

  private storages: Storage | null = null;

  constructor(private storage: Storage, public toastController: ToastController) {
    this.init();
    //cargo el contenido de localStorage en usuario
    this.cargarContactos();
  }

  guardarContacto(usuario: string,password: string){
    let um = false;
    const existe = this.usuario.find(c =>c.strUsuario===usuario);

    if(!existe){
      //this.usuario.unshift({strUsuario: usuario, strPassword: password, bolEstado: estado})
      this.storages.set('usuario',this.usuario);
      this.presentToast('Usuario no existe');
      console.log(this.usuario);
    }else {
      this.presentToast('Ingreso con exito');
      //console.log(this.usuario);
      um = true;
    }
    return um;
  }

    async cargarContactos() {
      const miUsuario= await this.storage.get('usuario');
      if (miUsuario) {
        this.usuario=miUsuario;
      }
    }

    async init() {
      // If using, define drivers here: await this.storage.defineDriver(/*...*/);
      const storage = await this.storage.create();
      this.storages = storage;
    }

    async presentToast(mensaje: string) {
      const toast = await this.toastController.create({
        message: mensaje,
        translucent:true,
        color:'medium',
        position: 'top',
        duration: 2000
      });
      toast.present();
    }

    crearContacto(usuario: string,password: string, estado: boolean){
      let um = false;
      const existe = this.usuario.find(c =>c.strUsuario===usuario);

      if(!existe){
        this.usuario.unshift({strUsuario: usuario, strPassword: password, bolEstado: estado});
        this.storages.set('usuario',this.usuario);
        this.presentToast('Usuario no existe');
        console.log(this.usuario);
      }else {
        this.presentToast('Ingreso con exito');
        //console.log(this.usuario);
        um = true;
      }
      return um;
    }


}
