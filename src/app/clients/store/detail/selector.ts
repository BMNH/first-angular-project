import { createSelector } from "@ngrx/store";
import { selectClientState } from "../state";

const selectClientDetail = createSelector(selectClientState, state => state.detail);

const selectClient = createSelector(selectClientDetail, state => state.client);
const selectLoading = createSelector(selectClientDetail, state => state.loading);
const selectError = createSelector(selectClientDetail, state => state.error);

export const ClientDetailSelectors = {
    selectClient,
    selectLoading,
    selectError
}