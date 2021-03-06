import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
    ) { }

  entrar (userLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://backendblogpessoal.herokuapp.com/usuarios/logar', userLogin)

  }

  cadastrar (user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://backendblogpessoal.herokuapp.com/usuarios/cadastrar', user)
    
  }

  getByIdUser (id: number): Observable <Usuario>{
    return this.http.get<Usuario>(`https://backendblogpessoal.herokuapp.com/usuarios/${id}`)
  }

  logado(){
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }

    return ok
  }

}
