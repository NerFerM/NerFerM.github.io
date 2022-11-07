import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent implements OnInit {

  @Output() avatarSelect = new EventEmitter<string>;

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

  ngOnInit() {}

  selectAvatar(avatar) {
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
    console.log(avatar.img);
    this.avatarSelect.emit(avatar.img);
  }

}
