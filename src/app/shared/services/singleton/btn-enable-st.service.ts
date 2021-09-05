import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class BtnEnableStService {
    constructor() { }
    
    private subject = new Subject<boolean>();

    sendStatus(flag: boolean){
        this.subject.next(flag);
    }

    getStatus():Observable<boolean> {
        return this.subject.asObservable();
    }
}