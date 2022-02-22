import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';
@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listAll();
  }

  listAll(): Tarefa[]{
    return this.tarefaService.List();
  }

  Delete($event: any, tarefa: Tarefa): void{
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa: '+tarefa.nome+'?')){
      this.tarefaService.Delete(tarefa.id);
      this.tarefas = this.listAll();
    }
  }

  AlterStatus($event: any, tarefa: Tarefa): void{
    $event.preventDefault();
    if (confirm('Deseja alterar o status da tarefa: '+tarefa.nome+'?')){
      this.tarefaService.AlterStatus(tarefa.id);
      this.tarefas = this.listAll();
    }
  }


}
