import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefa, TarefaService } from '..';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;

  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  Register():void{
    if (this.formTarefa.form.valid){
      this.tarefaService.Add(this.tarefa);
      this.router.navigate(["/tasks"]);
    }
  }
}
