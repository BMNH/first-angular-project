import { createSelector } from "@ngrx/store";
import { selectClientState } from "../state";

const selectClients = createSelector(selectClientState, state => state.list);

const selectClientList = createSelector(selectClients, state => state.clients);
const selectLoading = createSelector(selectClients, state => state.loading);
const selectError = createSelector(selectClients, state => state.error);
const selectDeleteLoading = createSelector(selectClients, state => state.deleteLoading);


export const ClientSelectors = {
    selectClientList,
    selectLoading,
    selectError,
    selectDeleteLoading
}