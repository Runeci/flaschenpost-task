import { Component, OnInit } from '@angular/core';
import { BeveragesApiService } from '../../../core/services/beverages-api.service';
import { Beverage } from '../../../shared/models/beverages.interfaces';
import { ActivatedRoute } from '@angular/router';
import { ViewMode } from '../../../shared/models/enums';
import { map, Observable } from 'rxjs';

@Component({
    selector: 'app-beverages-page',
    templateUrl: './beverages-page.component.html',
    styleUrls: ['./beverages-page.component.scss']
})
export class BeveragesPageComponent implements OnInit {
    public beverages$!: Observable<Beverage[]>;
    public viewMode$!: Observable<ViewMode>;

    constructor(
        private beveragesApiService: BeveragesApiService,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    public ngOnInit(): void {
        this.beverages$ = this.beveragesApiService.getBeverages();

        this.viewMode$ = this.activatedRoute.queryParams.pipe(
            map(params => params['view'] || ViewMode.Detail),
        );
    }
}
