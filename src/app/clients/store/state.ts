import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { clientListReducer, ClientListState } from "./reducer";


export interface ClientState {
    list: ClientListState
};

export const reducers: ActionReducerMap<ClientState> = {
    list: clientListReducer
};

export const FEATURE_NAME = 'client'
export const selectClientState = createFeatureSelector<ClientState>(FEATURE_NAME);