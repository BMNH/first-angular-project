import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { selectRouterState } from '../state';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}

export const routerState = createSelector(selectRouterState, (state) => state);
