import { RouterStateUrl } from "./router/router.state";
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

export interface AppState {
    router: RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer
};

export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');