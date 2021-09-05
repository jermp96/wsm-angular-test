import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Item } from 'src/app/models/Item.model';
import { Observable } from 'rxjs';

const BASE_URL = `${environment.apiUrl}`

@Injectable({providedIn: 'root'})

export class SideNavService {

    constructor(private _httpClient: HttpClient) { 

    }
    
    GetSideNavItems(): Observable<Item[]> {
        return this._httpClient.get<Item[]>(`${BASE_URL}/items`)
    }

}