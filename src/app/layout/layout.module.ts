import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { MatSidenavModule } from "@angular/material/sidenav";

import { LayoutComponent } from './layout.component';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatSidenavModule,
        ComponentsModule
    ],
    exports: [],
    declarations: [LayoutComponent],
    providers: [],
})
export class LayoutModule { }
