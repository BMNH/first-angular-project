import { Action, createReducer, on } from "@ngrx/store";
import { Client } from "../models/client.model";
import { ClientActions } from "./action";


export interface ClientListState {
    clients: Client[];
    loading: boolean;
    error: any;
}

const intialState: ClientListState = {
    clients: [],
    loading: false,
    error: null
}

const reducer = createReducer(intialState,
    on(ClientActions.clientRequest, state => ({ ...state, loading: true })),
    on(ClientActions.clientSuccess, (state, { clients }) => ({ ...state, loading: false, clients })),
    on(ClientActions.clientFailure, (state, { error }) => ({ ...state, loading: false, error, clients: [] })),
)

export function clientListReducer(state: ClientListState | undefined,
    action: Action) {
    return reducer(state, action);
}