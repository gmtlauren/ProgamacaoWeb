/*listar() — consulta as tarefas.
adicionar() — cadastra uma tarefa.
remover() — apaga uma tarefa.
marcarConcluida() — altera o status da tarefa.*/

import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[] = [];

  listar(): Tarefa[] {
    return this.tarefas;
  }

  adicionar(tarefa: Tarefa): void {
    this.tarefas.push(tarefa);
  }

//   O index é a posição da tarefa na lista.
// index: number: informa qual tarefa queremos concluir.
  remover(index: number): void {
// splice(index, 1) remove um item da lista.
  this.tarefas.splice(index, 1);
  }
//   .concluida = true: muda o status para concluída.
//   marcarConcluida: é o nome da ação.
  marcarConcluida(index: number): void {
  this.tarefas[index].concluida = true;
  }

}
