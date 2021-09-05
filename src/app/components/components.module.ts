import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { ItemContentComponent } from './item-content/item-content.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CampaignNavComponent } from './campaign-nav/campaign-nav.component';
import { FormsModule } from '@angular/forms';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatButtonModule,
        FormsModule,
        MatIconModule
    ],
    exports: [
        SideNavComponent,
        ItemContentComponent,
        CampaignNavComponent,
        TopNavBarComponent
    ],
    declarations: [
        SideNavComponent,
        ItemContentComponent,
        CampaignNavComponent,
        TopNavBarComponent
    ]
})
export class ComponentsModule { }
