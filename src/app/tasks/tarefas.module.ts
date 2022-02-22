import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './list';
import { CadastrarComponent } from './register';
import { EditarComponent } from './edit/editar.component';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
