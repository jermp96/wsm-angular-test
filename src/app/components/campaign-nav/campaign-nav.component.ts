import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Campaign } from 'src/app/models/Campaign.model';
import { CampaignGroup } from 'src/app/models/CampaignGroup.model';
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

    constructor(private campaignNavService: CampaignNavService) { }

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
}