import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewMode } from '../models/enums';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    public viewMode!: ViewMode;
    public viewM: typeof ViewMode = ViewMode;
    private viewModeSubscription!: Subscription;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    public ngOnInit(): void {
        this.viewModeSubscription = this.activatedRoute.queryParams.subscribe(
            (params) => this.viewMode = params['view'] || ViewMode.Detail
        );
    }

    public changeViewMode(): void {
        switch (this.viewMode) {
            case ViewMode.Detail:
                this.viewMode = ViewMode.Bottle;
                break;
            case ViewMode.Bottle:
                this.viewMode = ViewMode.Detail;
                break;
        }
        this.router.navigate([], {
            queryParams: { view: this.viewMode },
            queryParamsHandling: 'merge',
        });
    }

    public ngOnDestroy(): void {
        this.viewModeSubscription.unsubscribe();
    }
}
