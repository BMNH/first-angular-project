import { Action, createReducer, on } from "@ngrx/store";
import { Client } from "../../models/client.model";
import { ClientListActions } from "./action";


export interface ClientListState {
    clients: Client[];
    loading: boolean;
    deleteLoading: boolean;
    error: any;
}

const intialState: ClientListState = {
    clients: [],
    loading: false,
    deleteLoading: false,
    error: null
}

const reducer = createReducer(intialState,
    on(ClientListActions.clientsRequest, state => ({ ...state, loading: true })),
    on(ClientListActions.clientsSuccess, (state, { clients }) => ({ ...state, loading: false, clients })),
    on(ClientListActions.deleteClientRequest, (state) => ({ ...state, deleteLoading: true })),
    on(ClientListActions.deleteClientSuccess, (state) => ({ ...state, deleteLoading: false })),
    on(ClientListActions.clientsFailure,
        ClientListActions.deleteClientFailure, (state, { error }) => ({ ...state, loading: false, error, clients: [] })),
    on(ClientListActions.deleteClientFailure, (state, { error }) => ({ ...state, deleteLoading: false, error })),

)



export function clientListReducer(state: ClientListState | undefined,
    action: Action) {
    return reducer(state, action);
}