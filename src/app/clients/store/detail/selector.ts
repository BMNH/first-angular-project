import { createSelector } from "@ngrx/store";
import { selectRouterState } from "src/app/core/store/state";
import { selectClientState } from "../state";

const selectClientDetail = createSelector(selectClientState, state => state.detail);

const selectClient = createSelector(selectClientDetail, state => state.client);
const selectLoading = createSelector(selectClientDetail, state => state.loading);
const selectError = createSelector(selectClientDetail, state => state.error);

const isEditeMode = createSelector(selectRouterState, state => state.state.params['id'] !== undefined);

export const ClientDetailSelectors = {
    selectClient,
    selectLoading,
    selectError,

    isEditeMode
}