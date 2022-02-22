import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Client } from '../models/client.model';
import { ClientDetailActions } from './detail/action';
import { ClientDetailSelectors } from './detail/selector';
import { ClientListActions } from './list/action';
import { ClientSelectors } from './list/selector';

@Injectable()
export class ClientStoreService {
    constructor(public store: Store) { }

    clientsRequest() {
        this.store.dispatch(ClientListActions.clientsRequest());
    }

    clientRequest() {
        this.store.dispatch(ClientDetailActions.clientRequest());
    }

    selectClients() {
        return this.store.pipe(select(ClientSelectors.selectClientList));
    }

    selectClientsLoading() {
        return this.store.pipe(select(ClientSelectors.selectLoading));
    }

    selectClient() {
        return this.store.pipe(select(ClientDetailSelectors.selectClient));
    }

    selectClientLoading() {
        return this.store.pipe(select(ClientDetailSelectors.selectLoading));
    }


    createClient(client: Client) {
        this.store.dispatch(ClientDetailActions.createClientRequest({ client }));
    }

    isEditeMode() {
        return this.store.pipe(select(ClientDetailSelectors.isEditeMode));
    }
}