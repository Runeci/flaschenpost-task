import { Component, OnDestroy, OnInit } from '@angular/core';
import { BeveragesApiService } from '../../../core/services/beverages-api.service';
import { Beverage, FilterSettings } from '../../../shared/models/beverages.interfaces';
import { ActivatedRoute } from '@angular/router';
import { ViewMode } from '../../../shared/models/enums';
import { Subscription } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'app-beverages-page',
    templateUrl: './beverages-page.component.html',
    styleUrls: ['./beverages-page.component.scss']
})
export class BeveragesPageComponent implements OnInit, OnDestroy {
    public viewMode: ViewMode;
    public beverages: Beverage[];
    public filterSettings: FilterSettings;

    private settingsSubscription: Subscription;
    private beveragesSubscription: Subscription;

    constructor(
        private beveragesApiService: BeveragesApiService,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    public ngOnInit(): void {
        this.settingsSubscription = this.activatedRoute.queryParams
            .subscribe((params) => {
                const { priceSort = null, moreThanTwoEuro = null } = params;
                this.filterSettings = {
                    priceSortDirection: priceSort,
                    moreThanTwoEuro: coerceBooleanProperty(moreThanTwoEuro),
                };
                this.viewMode = params['view'] || ViewMode.Detail;
            });

        this.beveragesSubscription = this.beveragesApiService.getBeverages()
            .subscribe((beverages) => {
                this.beverages = beverages;
            });
    }

    public ngOnDestroy(): void {
        this.settingsSubscription.unsubscribe();
        this.beveragesSubscription.unsubscribe();
    }
}
