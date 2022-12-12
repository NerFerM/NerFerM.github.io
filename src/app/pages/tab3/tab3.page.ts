import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  usuario: Usuario = {};

  constructor(private usuarioService: UsuarioService, private uiService: UiServiceService, private postsService: PostsService) {}

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
    console.log(this.usuario);
  }

  async actualizar(formActualizar) {
    if (formActualizar.invalid) { return; }
    const actualizado = await this.usuarioService.updateUser(this.usuario);
    if (actualizado) {
      this.uiService.presentToast('Tu perfil se ha actualizado');
    } else {
      this.uiService.presentToast('Error: perfil no actualizado');
    }
  }

  logout() {
    this.postsService.paginaPosts = 0;
    this.usuarioService.logout();
  }
}