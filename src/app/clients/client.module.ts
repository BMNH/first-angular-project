import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ClientRoutingModule } from "./client-routing.module";
import { COMPONENTS } from "./components";
import { ClientStoreModule } from "./store/client-store.module";

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        COMPONENTS
    ],
    imports: [
        SharedModule,
        CommonModule,
        ClientRoutingModule,
        ClientStoreModule
      ],
    exports: [
    ],
    providers: [],
    bootstrap: []
  })
  export class ClientModule { }