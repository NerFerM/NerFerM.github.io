import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  constructor ( private navCtrl: NavController, private http: HttpClient, private _storage:Storage) {
    this._storage.create();
  }

  login(email: string, password: string) {
    const data = {email, password};

    return new Promise(resolve => {
      this.http.post(`${URL}/user/login`, data).subscribe(resp => {
        console.log(resp);
        if (resp['ok']) {
          this.saveToken(resp['token']);
          resolve(true);
        } else {
          this.token = null;
          this._storage.clear();
          resolve(false);
        }
      });
    });
    
  }

  registro(usuario: Usuario) {
    return new Promise(resolve => {
      this.http.post(`${URL}/user/create`, usuario).subscribe(resp => {
        console.log(resp);
        if (resp ['ok']) {
          this.saveToken(resp['token']);
          resolve(true);
        } else {
          this.token = null;
          this._storage.clear();
          resolve(false);
        }
      });
    });
  }

   async saveToken( token: string ) {
    this.token = token;
    await this._storage.set('token', token);
  }
}
