import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ClientStoreService } from './client-store.service';
import { ClientEffect } from './effect';
import { FEATURE_NAME, reducers } from './state';


@NgModule({
    imports: [
        StoreModule.forFeature(FEATURE_NAME, reducers),
        EffectsModule.forFeature([ClientEffect])],
    providers: [
        ClientStoreService
    ],
    exports: [StoreModule, EffectsModule],
})
export class ClientStoreModule {
    constructor() { }
}