

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ACTIONS_SUBJECT_PROVIDERS } from '@ngrx/store/src/actions_subject';
import { catchError, filter, map, of, switchMap, tap } from 'rxjs';
import { ClientService } from '../../services/client.service';
import { ClientListActions } from './action';

@Injectable()
export class ClientEffect {

    constructor(public actions$: Actions, public clientService: ClientService) { }

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
                alert('success request client ')
            })
        ), {
        dispatch: false
    }
    );

    clientFailure$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientListActions.clientsFailure),
            tap(() => {
                alert('failure request client ')
            })
        ), {
        dispatch: false
    }
    );


}