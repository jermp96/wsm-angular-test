import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item.model';
import { ItemStService } from 'src/app/shared/services/singleton/item-st.service';
import { SideNavService } from './side-nav.service';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {

    public navItems: Item[];

    constructor(
        private sideNavService: SideNavService,
        private itemStService: ItemStService) { }

    ngOnInit() { 
        this.getItems();
    }

    getItems () {
        this.sideNavService.GetSideNavItems()
            .subscribe(
                res => {
                    this.navItems = res;
                }
            );
    }

    sendItem (itm:Item) {
        this.itemStService.sendItem(itm);
    }

    onItemSelected(value: Item){
        this.sendItem(value);
    }
}