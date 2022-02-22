import { Routes } from "@angular/router";

import { ListarTarefaComponent } from "./list";
import { CadastrarComponent } from "./register";
import { EditarComponent } from "./edit";

export const TarefaRoutes: Routes = [
    {
    path: 'tasks',
    redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListarTarefaComponent
    },
    {
        path: 'tasks/register',
        component: CadastrarComponent
    },
    {
        path: 'tasks/edit/:id',
        component: EditarComponent
    }
];