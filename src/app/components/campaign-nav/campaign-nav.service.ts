import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CampaignGroup } from 'src/app/models/CampaignGroup.model';
import { Campaign } from 'src/app/models/Campaign.model';

const BASE_URL = `${environment.apiUrl}`

@Injectable({providedIn: 'root'})

export class CampaignNavService {

    constructor(private _httpClient: HttpClient) { 

    }
    
    GetCampaignGroups(): Observable<CampaignGroup[]> {
        return this._httpClient.get<CampaignGroup[]>(`${BASE_URL}/campaign-groups/?id=1`);
    }

    GetCampaigns(): Observable<Campaign[]> {
        return this._httpClient.get<Campaign[]>(`${BASE_URL}/campaigns`)
    }

}