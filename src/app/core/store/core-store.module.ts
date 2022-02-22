import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { NavigationActionTiming, RouterState, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomSerializer } from './router/custom-serializer';
import { reducers } from './state';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, {
            metaReducers: []
        }),
        EffectsModule.forRoot([
        ]),
        StoreDevtoolsModule.instrument({
            name: 'first-app',
            serialize: true,
        }),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal,
            navigationActionTiming: NavigationActionTiming.PostActivation,
        })],
    providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
    exports: [],
})
export class CoreStoreModule {
    constructor() { }
}