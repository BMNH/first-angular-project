import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "./angular-material-module";
import { COMPONENTS } from "./components/header";
import { SERVICES } from "./services";
import { CoreStoreModule } from "./store/core-store.module";

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    CoreStoreModule
  ],
  exports: [
    COMPONENTS,
    AngularMaterialModule
  ],
  providers: [SERVICES],
  bootstrap: []
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}