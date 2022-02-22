import { createAction, props } from "@ngrx/store";
import { Client } from "../../models/client.model";

const tagAction = '[APP/CLIENT]';

const clientRequest = createAction(`${tagAction} client request`);
const clientSuccess = createAction(`${tagAction} client success`, props<{ client: Client }>());
const clientFailure = createAction(`${tagAction} client failure`, props<{ error: any }>());

const createClientRequest = createAction(`${tagAction} create client request`, props<{ client: Client }>());
const createClientSuccess = createAction(`${tagAction} create client success`, props<{ client: Client }>());
const createClientFailure = createAction(`${tagAction} create client failure`, props<{ error: any }>());


export const ClientDetailActions = {
    clientRequest,
    clientSuccess,
    clientFailure,

    createClientRequest,
    createClientSuccess,
    createClientFailure
};