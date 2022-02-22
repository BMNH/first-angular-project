import { createSelector } from "@ngrx/store";
import { selectClientState } from "./state";

const selectClient = createSelector(selectClientState, state => state.list);

const selectClientList = createSelector(selectClient, state => state.clients);
const selectLoading = createSelector(selectClient, state => state.loading);
const selectError = createSelector(selectClient, state => state.error);

export const ClientSelectors = {
    selectClientList,
    selectLoading,
    selectError
}