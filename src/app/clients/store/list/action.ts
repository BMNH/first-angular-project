import { createAction, props } from "@ngrx/store";
import { Client } from "../../models/client.model";

const tagAction = '[APP/CLIENT]';

const clientsRequest = createAction(`${tagAction} clients request`);
const clientsSuccess = createAction(`${tagAction} clients success`, props<{ clients: Client[] }>());
const clientsFailure = createAction(`${tagAction} clients failure`, props<{ error: any }>());

const deleteClientRequest = createAction(`${tagAction} delete client request`, props<{ client: Client }>());
const deleteClientSuccess = createAction(`${tagAction} delete client success`, props<{ client: Client }>());
const deleteClientFailure = createAction(`${tagAction} delete client failure`, props<{ error: any }>());

export const ClientListActions = {
    clientsRequest,
    clientsSuccess,
    clientsFailure,

    deleteClientRequest,
    deleteClientSuccess,
    deleteClientFailure,
};

