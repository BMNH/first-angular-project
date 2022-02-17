import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AngularMaterialModule } from "../core/angular-material-module";

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
    ],
    imports: [
        AngularMaterialModule,
        CommonModule
      ],
    exports: [
        AngularMaterialModule,
        CommonModule
    ],
    providers: [],
    bootstrap: []
  })
  export class SharedModule { }