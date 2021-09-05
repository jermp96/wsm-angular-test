import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Campaign } from 'src/app/models/Campaign.model';
import { CampaignGroup } from 'src/app/models/CampaignGroup.model';
import { BtnEnableStService } from 'src/app/shared/services/singleton/btn-enable-st.service';
import { CampaignNavService } from './campaign-nav.service';

@Component({
    selector: 'app-campaign-nav',
    templateUrl: './campaign-nav.component.html',
    styleUrls: ['./campaign-nav.component.scss']
})

export class CampaignNavComponent implements OnInit {

    public campaignGroup: CampaignGroup;
    public campaign: Campaign;
    public campaingsCount: number;
    public enabledContinue: boolean;

    constructor(
        private campaignNavService: CampaignNavService,
        private _btnEnableStService: BtnEnableStService) {
            this.setContinueState();
         }

    ngOnInit() { 
        this.getData();
    }

    getData() {
        combineLatest(
            [this.campaignNavService.GetCampaignGroups(),
            this.campaignNavService.GetCampaigns()]
            )
            .subscribe(([groups, campaigns]) => {
                if(groups && campaigns){
                    this.campaignGroup = groups[0];
                    this.campaign = campaigns[0]
                    this.campaingsCount = campaigns.length;
                }
            })
    }

    setContinueState() {
        this._btnEnableStService.getStatus()
            .subscribe(
                res => {
                    this.enabledContinue = res;
                }
            );
    }
}