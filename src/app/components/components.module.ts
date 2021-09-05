import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { ItemContentComponent } from './item-content/item-content.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatExpansionModule,
        MatCheckboxModule
    ],
    exports: [
        SideNavComponent,
        ItemContentComponent
    ],
    declarations: [
        SideNavComponent,
        ItemContentComponent
    ]
})
export class ComponentsModule { }
