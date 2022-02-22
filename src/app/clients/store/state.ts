import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { clientDetailReducer, ClientDetailState } from "./detail/reducer";
import { clientListReducer, ClientListState } from "./list/reducer";


export interface ClientState {
    list: ClientListState,
    detail: ClientDetailState
};

export const reducers: ActionReducerMap<ClientState> = {
    list: clientListReducer,
    detail: clientDetailReducer
};

export const FEATURE_NAME = 'client'
export const selectClientState = createFeatureSelector<ClientState>(FEATURE_NAME);