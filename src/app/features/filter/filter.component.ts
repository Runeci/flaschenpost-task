import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PriceSortDirection } from '../../shared/models/enums';
import { FilterSettings } from '../../shared/models/beverages.interfaces';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
    public filterSettings: FilterSettings;
    public isToggled: boolean;
    public priceSortDirection: PriceSortDirection;
    public priceIconMap: Record<PriceSortDirection, string> = {
        [PriceSortDirection.Asc]: 'arrow_upward',
        [PriceSortDirection.Decs]: 'arrow_downward',
    };

    private settingsSubscription: Subscription;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    public ngOnInit(): void {
        this.settingsSubscription = this.activatedRoute.queryParams
            .subscribe((params) => {
                    this.isToggled = coerceBooleanProperty(params['moreThanTwoEuro']) || null;
                    this.priceSortDirection = params['priceSort'] || null;
                }
            );
    }

    public onPriceSort(): void {
        if (!this.priceSortDirection) {
            this.priceSortDirection = PriceSortDirection.Asc;
        } else if (this.priceSortDirection === PriceSortDirection.Asc) {
            this.priceSortDirection = PriceSortDirection.Decs;
        } else {
            this.priceSortDirection = null;
        }

        const sortParam = { priceSort: this.priceSortDirection };
        this.addQueryParam(sortParam);
    }

    public onPriceFilter(): void {
        const filterParam = { moreThanTwoEuro: this.isToggled.toString() };
        this.addQueryParam(filterParam);
    }

    public ngOnDestroy(): void {
        this.settingsSubscription.unsubscribe();
    }

    private addQueryParam(param: Record<string, string>): void {
        this.router.navigate([], {
            queryParams: param,
            queryParamsHandling: 'merge',
        });
    }
}
