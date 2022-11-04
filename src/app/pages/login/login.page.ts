import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('mainSlide', {static: true}) slides: IonSlides;

  avatars = [
    { img: 'default1.png', seleccionado: true },
    { img: 'default2.png', seleccionado: false },
    { img: 'default3.png', seleccionado: false },
    { img: 'default4.png', seleccionado: false },
    { img: 'default5.png', seleccionado: false },
    { img: 'default6.png', seleccionado: false },
    { img: 'default7.png', seleccionado: false },
    { img: 'default8.png', seleccionado: false },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  };

  loginUser = {
    email: 'smrcifp.nerea@gmail.com',
    password: '123456'
  };

  constructor( private usuarioService: UsuarioService, private navCtrl: NavController) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  async login (formLogin: NgForm) {
    if (formLogin.invalid) { return; }
    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);
    if (valido) {
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
    }
    else {
      // email o contraseña no son correctos
    }
  }

  register (formRegister: NgForm) {
    console.log(formRegister.valid);
  }

  selectAvatar(avatar) {
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
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
