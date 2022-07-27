import { Component, Input } from '@angular/core';
import { Beverage } from '../../../shared/models/beverages.interfaces';

@Component({
    selector: 'app-beverages-detail-view',
    templateUrl: './beverages-detail-view.component.html',
    styleUrls: ['./beverages-detail-view.component.scss']
})
export class BeveragesDetailViewComponent {
    @Input() beverage!: Beverage;
}
