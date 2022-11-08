import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespuestaPosts } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts = 0;

  constructor( private http: HttpClient, private usuarioService: UsuarioService ) { }

  getPosts(pull: boolean = false) {
    if (pull) {
      this.paginaPosts = 0;
    }
    this.paginaPosts++;
    return this.http.get<RespuestaPosts>(`${URL}/posts/?pagina=${this.paginaPosts}`);
  }

  crearPost( post ) {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    this.http.post(`${URL}/posts`, post, {headers}).subscribe(resp => {
      console.log(resp);
    });
  }

}