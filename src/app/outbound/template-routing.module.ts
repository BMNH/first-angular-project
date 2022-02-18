import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from '../clients/components/client-form/form.component';
import { ClientsComponent } from '../clients/components/client-list/clients.component';
import { ClientParentComponent } from '../clients/components/client/client-parent.component';





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
export class TemplateRoutingModule { }
