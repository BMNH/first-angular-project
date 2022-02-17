import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './components/client-form/form.component';
import { ClientsComponent } from './components/client-list/clients.component';
import { ClientParentComponent } from './components/client/client-parent.component';




const clientRoutes: Routes = [
    {
        path: '',
        component: ClientParentComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full',
            },
            {
                path: 'list',
                component: ClientsComponent,
            },
            {
                path: 'form',
                component: ClientFormComponent,
            },
            {
                path: 'form/:id',
                component: ClientFormComponent,
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(clientRoutes)],
    exports: [RouterModule],
})
export class ClientRoutingModule { }
