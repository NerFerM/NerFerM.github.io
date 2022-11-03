import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular';

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

  constructor() { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  login (formLogin: NgForm) {
    console.log(formLogin.valid);
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
