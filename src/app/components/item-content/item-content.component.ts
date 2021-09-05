import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item, ActionVariant } from 'src/app/models/Item.model';
import { BtnEnableStService } from 'src/app/shared/services/singleton/btn-enable-st.service';
import { ItemStService } from 'src/app/shared/services/singleton/item-st.service';

@Component({
    selector: 'app-item-content',
    templateUrl: './item-content.componet.html',
    styleUrls: ['./item-content.component.scss']
})

export class ItemContentComponent implements OnInit{

    public _item: Item;
    public activeCounter: number;

    constructor(
        private _itemStService: ItemStService,
        private _btnEnableStService: BtnEnableStService) {
        this.getItemFromSt();
     }

    ngOnInit() { }

    getItemFromSt() {
        this._itemStService.getItem()
        .subscribe(
            res => {
                this._item = res;
                this.activeCounter = 0;
                this._btnEnableStService.sendStatus(false);
                this._item.actions.forEach(el => el.active = false);
            },
            err => {
                console.error(err);
            }
        );
    }

    onStopPropagation(event: Event) {
        event.stopPropagation();
    }

    onChangeSelectedActions(actions: ActionVariant[]){
        this.activeCounter = actions.filter(el => el.active == true).length;
        if(this.activeCounter > 0){
            this._btnEnableStService.sendStatus(true);
        }else{
            this._btnEnableStService.sendStatus(false);
        }
    }
}