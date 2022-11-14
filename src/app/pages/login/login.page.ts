import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('mainSlide', {static: true}) slides: IonSlides;

  loginUser = {
    email: 'prueba1@test.com',
    password: '123456'
  };

  registerUser: Usuario = {
    email: '',
    password: '',
    nombre: '',
    avatar: 'default1.png'
  };

  constructor( private usuarioService: UsuarioService, private navCtrl: NavController, private uiService: UiServiceService ) {}

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  async login (formLogin: NgForm) {
    if (formLogin.invalid) { return; }
    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);
    if (valido) {
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
    } else {
      this.uiService.presentAlert('Correo o contraseña no son correctos.');
    }
  }

  async register (formRegister: NgForm) {
    if (formRegister.invalid) { return; }
    const valido = await this.usuarioService.registro(this.registerUser);
    if (valido) {
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
    } else {
      this.uiService.presentAlert('Este correo electrónico ya existe.');
    }
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }
}