import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Item } from 'src/app/models/Item.model';

@Injectable({providedIn: 'root'})

export class ItemStService {
    
    private subject = new Subject<Item>();

    sendItem(itm: Item){
        this.subject.next(itm);
    }

    getItem():Observable<Item> {
        return this.subject.asObservable();
    }

}