import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ClientStoreService } from './client-store.service';
import { ClientDetailEffect } from './detail/effect';
import { ClientEffect } from './list/effect';
import { FEATURE_NAME, reducers } from './state';


@NgModule({
    imports: [
        StoreModule.forFeature(FEATURE_NAME, reducers),
        EffectsModule.forFeature([ClientEffect, ClientDetailEffect])],
    providers: [
        ClientStoreService
    ],
    exports: [StoreModule, EffectsModule],
})
export class ClientStoreModule {
    constructor() { }
}