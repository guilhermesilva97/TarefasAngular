import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

import { Tarefa } from '.';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  List(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  Add(tarefa: Tarefa): void {
    const tarefas = this.List();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  Find(id: number): Tarefa {
    const tarefas: Tarefa[] = this.List();
    return tarefas.find(x => x.id == id);
  }

  Update(tarefa: Tarefa) {
    const tarefas: Tarefa[] = this.List();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id == obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  Delete(id: number): void {
    let tarefas: Tarefa[] = this.List();
    tarefas = tarefas.filter(x => x.id != id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  AlterStatus(id: number): void {
    const tarefas: Tarefa[] = this.List();
    tarefas.forEach((obj, index, objs) => {
      if (id == obj.id) {
        objs[index].concluida = !obj.concluida;
      }
      localStorage['tarefas'] = JSON.stringify(tarefas);
    });
  }
}
