import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Login } from './login/login';
import { Sobre } from './sobre/sobre';
import { Home } from './home/home';
import { Exemplo2 } from './exemplo2/exemplo2';
import { Exercicio1 } from './exercicio1/exercicio1';
import { Exercicio2 } from './exercicio2/exercicio2';
import { Exercicio3 } from './exercicio3/exercicio3';
import { Exercicio4 } from './exercicio4/exercicio4';
import { Exercicio5 } from './exercicio5/exercicio5';
import { Playlist } from './playlist/playlist';
import { AulaTypes } from './aula-types/aula-types';
import { CadastrarTarefa } from './cadastrar-tarefa/cadastrar-tarefa';
import { ListaTarefas } from './lista-tarefas/lista-tarefas';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'sobre', component: Sobre },
  { path: 'home', component: Home },
  { path: 'exemplo2', component: Exemplo2 },
  { path: 'exercicio1', component: Exercicio1 },
  { path: 'exercicio2', component: Exercicio2 },
  { path: 'exercicio3', component: Exercicio3 },
  { path: 'exercicio4', component: Exercicio4},
  { path: 'exercicio5', component: Exercicio5},
  { path: 'playlist', component: Playlist},
  { path: 'aulatypes', component: AulaTypes},
  { path: 'cadastrar-tarefa', component: CadastrarTarefa },
  { path: 'lista-tarefas', component: ListaTarefas },

];

