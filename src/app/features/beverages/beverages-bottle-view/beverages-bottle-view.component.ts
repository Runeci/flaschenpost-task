import { Component, Input } from '@angular/core';
import { Beverage } from '../../../shared/models/beverages.interfaces';

@Component({
    selector: 'app-beverages-bottle-view',
    templateUrl: './beverages-bottle-view.component.html',
    styleUrls: ['./beverages-bottle-view.component.scss']
})
export class BeveragesBottleViewComponent{
    @Input() beverage!: Beverage;
}
