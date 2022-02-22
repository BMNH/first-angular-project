import { createAction, props } from "@ngrx/store";
import { Client } from "../models/client.model";

const tagAction = '[APP/CLIENT]';

const clientRequest = createAction(`${tagAction} client request`);
const clientSuccess = createAction(`${tagAction} client success`, props<{ clients: Client[] }>());
const clientFailure = createAction(`${tagAction} client failure`, props<{ error: any }>());


export const ClientActions = {
    clientRequest,
    clientSuccess,
    clientFailure
};