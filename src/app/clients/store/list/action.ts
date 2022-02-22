import { createAction, props } from "@ngrx/store";
import { Client } from "../../models/client.model";

const tagAction = '[APP/CLIENT]';

const clientsRequest = createAction(`${tagAction} clients request`);
const clientsSuccess = createAction(`${tagAction} clients success`, props<{ clients: Client[] }>());
const clientsFailure = createAction(`${tagAction} clients failure`, props<{ error: any }>());

const clientRequest = createAction(`${tagAction} client request`);
const clientSuccess = createAction(`${tagAction} client success`, props<{ client: Client }>());
const clientFailure = createAction(`${tagAction} client failure`, props<{ error: any }>());


export const ClientListActions = {
    clientsRequest,
    clientsSuccess,
    clientsFailure,

    clientRequest,
    clientSuccess,
    clientFailure,
};