import { Component } from '@angular/core';
// FormsModule: permite pegar o texto digitado nos campos.
import { FormsModule } from '@angular/forms';
// TarefaService: permite enviar a tarefa para o serviço.
import { TarefaService } from '../tarefa-service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-cadastrar-tarefa',
  styleUrl: './cadastrar-tarefa.css',
  templateUrl: './cadastrar-tarefa.html',
})
export class CadastrarTarefa {
  nome: string = '';
  prazo: string = '';
  constructor(
  private tarefaService: TarefaService,
  private router: Router
 ) {}

  cadastrar(): void {
    const novaTarefa = {
      nome: this.nome,
      prazo: this.prazo,
      concluida: false
    };

  this.tarefaService.adicionar(novaTarefa);

  console.log('Tarefa cadastrada:', this.tarefaService.listar());
  // Manda o Angular abrir a página da lista depois de cadastrar.
  this.router.navigate(['/lista-tarefas']);

  }
  
  
}
