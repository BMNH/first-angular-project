

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from '@ngrx/store';
import { ACTIONS_SUBJECT_PROVIDERS } from '@ngrx/store/src/actions_subject';
import { catchError, filter, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { selectRouterState } from 'src/app/core/store/state';
import swal from 'sweetalert2';
import { ClientsComponent } from '../../components/client-list/clients.component';
import { ClientService } from '../../services/client.service';
import { ClientListActions } from './action';

@Injectable()
export class ClientEffect {

    constructor(public actions$: Actions, public clientService: ClientService, public store: Store ) { }

    clientRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientListActions.clientsRequest),
            switchMap(() => this.clientService.getClients().pipe(
                map(clients => ClientListActions.clientsSuccess({ clients })),
                catchError((error) => of(ClientListActions.clientsFailure({ error })))
            ))
        )
    );


    clientSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientListActions.clientsSuccess),
            tap(() => {
                //alert('success request client ')
            })
        ), {
        dispatch: false
    }
    );

    clientFailure$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientListActions.clientsFailure),
            tap(() => {
                //alert('failure request client ')
            })
        ), {
        dispatch: false
    }
    );

    deleteClientRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientListActions.deleteClientRequest),
        switchMap((action) => this.clientService.deleteClient(action.client.id).pipe(
            map(client => ClientListActions.deleteClientSuccess({client: action.client})),
            catchError((error) => of(ClientListActions.deleteClientFailure({ error })))
        ))
    )
);


    deleteClientSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientListActions.deleteClientSuccess),
            map(() => ClientListActions.clientsRequest())
        )
    );

    deleteClientSuccessMessage$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientListActions.deleteClientSuccess),
        tap((action) => {
            swal(
                'Client deleted',
                `The client ${action.client.name} was deleted`,
                'success'
              )        })
    ), {
    dispatch: false
}
);

    deleteClientFailure$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientListActions.clientsFailure),
            tap(() => {
                //alert('failure request client ')
            })
        ), {
        dispatch: false
    }
    );


}