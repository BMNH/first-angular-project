

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from 'rxjs';
import { ClientService } from '../services/client.service';
import { ClientActions } from './action';

@Injectable()
export class ClientEffect {
    
    constructor(public actions$: Actions, public clientService: ClientService) { }

    clientRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientActions.clientRequest),
            switchMap(() => this.clientService.getClients().pipe(
                map(clients => ClientActions.clientSuccess({ clients })),
                catchError((error) => of(ClientActions.clientFailure({ error })))
            ))
        )
    )
}