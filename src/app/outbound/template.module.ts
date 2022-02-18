import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { TemplateRoutingModule } from "./template-routing.module";

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
    ],
    imports: [
        SharedModule,
        CommonModule,
        TemplateRoutingModule
    ],
    exports: [
    ],
    providers: [],
    bootstrap: []
})
export class TemplateModule { }