import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../tarefa-service';
import { Tarefa } from '../tarefa';


@Component({
  imports: [RouterLink],
  selector: 'app-lista-tarefas',
  styleUrl: './lista-tarefas.css',
  templateUrl: './lista-tarefas.html',
})
export class ListaTarefas {
  tarefas: Tarefa[] = [];

    constructor(private tarefaService: TarefaService) {
      this.tarefas = this.tarefaService.listar();
    }
    concluir(index: number): void {
      this.tarefaService.marcarConcluida(index);
      this.tarefas = this.tarefaService.listar();
    }

    remover(index: number): void {
      this.tarefaService.remover(index);
      this.tarefas = this.tarefaService.listar();
    }

    totalTarefas(): number {
      // .length conta quantas tarefas existem.
      return this.tarefas.length;
    }

    tarefasConcluidas(): number {
      // .filter(tarefa => tarefa.concluida) seleciona somente as concluídas.
      return this.tarefas.filter(tarefa => tarefa.concluida).length;
    }

    tarefasPendentes(): number {
      return this.tarefas.filter(tarefa => !tarefa.concluida).length;
    }
}
