import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ClientActions } from './action';
import { ClientSelectors } from './selector';

@Injectable()
export class ClientStoreService {
    constructor(public store: Store) { }

    clientRequest() {
        this.store.dispatch(ClientActions.clientRequest());
    }

    selectClients() {
        return this.store.pipe(select(ClientSelectors.selectClientList));
    }
}