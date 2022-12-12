import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class ComponentLibraryService {
    constructor() { }
}
ComponentLibraryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: ComponentLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ComponentLibraryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: ComponentLibraryService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: ComponentLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ComponentLibraryComponent {
}
ComponentLibraryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: ComponentLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ComponentLibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: ComponentLibraryComponent, selector: "lib-component-library", ngImport: i0, template: `
    <p>
      component-library works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: ComponentLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-component-library', template: `
    <p>
      component-library works!
    </p>
  ` }]
        }] });

class ComponentLibraryModule {
}
ComponentLibraryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: ComponentLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ComponentLibraryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.3", ngImport: i0, type: ComponentLibraryModule, declarations: [ComponentLibraryComponent], exports: [ComponentLibraryComponent] });
ComponentLibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: ComponentLibraryModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: ComponentLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ComponentLibraryComponent
                    ],
                    imports: [],
                    exports: [
                        ComponentLibraryComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of component-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentLibraryComponent, ComponentLibraryModule, ComponentLibraryService };
//# sourceMappingURL=component-library.mjs.map
