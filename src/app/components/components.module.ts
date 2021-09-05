import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";

import { ItemContentComponent } from './item-content/item-content.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CampaignNavComponent } from './campaign-nav/campaign-nav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatButtonModule,
        FormsModule
    ],
    exports: [
        SideNavComponent,
        ItemContentComponent,
        CampaignNavComponent
    ],
    declarations: [
        SideNavComponent,
        ItemContentComponent,
        CampaignNavComponent
    ]
})
export class ComponentsModule { }
