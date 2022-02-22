

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from '@ngrx/store';
import { ACTIONS_SUBJECT_PROVIDERS } from '@ngrx/store/src/actions_subject';
import { catchError, filter, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { selectRouterState } from 'src/app/core/store/state';
import swal from 'sweetalert2';
import { ClientService } from '../../services/client.service';
import { ClientDetailActions } from './action';

@Injectable()
export class ClientDetailEffect {

    constructor(public actions$: Actions, public clientService: ClientService, public store: Store, public router: Router) { }

    clientRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientDetailActions.clientRequest),
            withLatestFrom(
                this.store.pipe(select(selectRouterState))
            ),
            switchMap(([action, router]) => this.clientService.getClient(router.state.params['id']).pipe(
                map(client => ClientDetailActions.clientSuccess({ client })),
                catchError((error) => of(ClientDetailActions.clientFailure({ error })))
            ))
        )
    );


    createClientRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientDetailActions.createClientRequest),
            switchMap((action) => this.clientService.create(action.client).pipe(
                map(client => ClientDetailActions.createClientSuccess({ client })),
                catchError((error) => of(ClientDetailActions.createClientFailure({ error })))
            ))
        )
    );

    createClientSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientDetailActions.createClientSuccess),
            tap((action) => {
                this.router.navigate(['/clients'])
                swal('New Client', `Client ${action.client.name} was created successfully`, 'success')
            })
        ), { dispatch: false }
    );

    /*
clientSuccess$ = createEffect(() =>
this.actions$.pipe(
ofType(ClientActions.clientsSuccess),
tap(() => {
    alert('success request client ')
})
), {
dispatch: false
}
);

clientFailure$ = createEffect(() =>
this.actions$.pipe(
ofType(ClientActions.clientsFailure),
tap(() => {
    alert('failure request client ')
})
), {
dispatch: false
}
);
*/

}