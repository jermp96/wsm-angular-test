import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/models/Item.model';
import { ItemStService } from 'src/app/shared/services/singleton/item-st.service';

@Component({
    selector: 'app-item-content',
    templateUrl: './item-content.componet.html',
    styleUrls: ['./item-content.component.scss']
})

export class ItemContentComponent implements OnInit{

    public _item: Item;

    constructor(private _itemStService: ItemStService) {
        this.getItemFromSt();
     }

    ngOnInit() { }

    getItemFromSt() {
        this._itemStService.getItem()
        .subscribe(
            res => {
                this._item = res;
                console.log(this._item);
            },
            err => {
                console.error(err);
            }
        );
    }

    onChangeSelectedActions(event: Event) {
        event.stopPropagation();
    }
}