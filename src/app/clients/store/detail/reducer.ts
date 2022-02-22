import { Action, createReducer, on } from "@ngrx/store";
import { Client } from "../../models/client.model";
import { ClientDetailActions } from "./action";

export interface ClientDetailState {
    client: Client | null;
    loading: boolean;
    error: any;
}

const intialState: ClientDetailState = {
    client: null,
    loading: false,
    error: null
}

const reducer = createReducer(intialState,
    on(ClientDetailActions.clientRequest,
        ClientDetailActions.createClientRequest, state => ({ ...state, loading: true })),
    on(ClientDetailActions.createClientSuccess,
        ClientDetailActions.createClientFailure, state => ({ ...state, loading: false })),
    on(ClientDetailActions.clientSuccess, (state, { client }) => ({ ...state, loading: false, client })),
    on(ClientDetailActions.clientFailure, (state, { error }) => ({ ...state, loading: false, error, client: null })),
)

export function clientDetailReducer(state: ClientDetailState | undefined,
    action: Action) {
    return reducer(state, action);
}