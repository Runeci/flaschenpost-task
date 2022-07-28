import { Pipe, PipeTransform } from '@angular/core';
import { Beverage, FilterSettings } from '../models/beverages.interfaces';
import { PriceSortDirection } from '../models/enums';

@Pipe({
    name: 'beveragesSort'
})
export class BeveragesSortPipe implements PipeTransform {

    public transform(beveragesArr: Beverage[], settings: FilterSettings): Beverage[] {
        if (!beveragesArr) {
            return beveragesArr;
        }

        let filteredArr = [...beveragesArr];
        this.sortByPrice(filteredArr, settings.priceSortDirection);
        return filteredArr;
    }

    private sortByPrice(beveragesArr: Beverage[], direction: PriceSortDirection | null): Beverage[] {
        switch (direction) {
            case PriceSortDirection.Asc:
                return beveragesArr
                    .sort((a, b) => a.articles[0].price - b.articles[0].price);
            case PriceSortDirection.Decs:
                return beveragesArr
                    .sort((a, b) => b.articles[0].price - a.articles[0].price);
            default:
                return beveragesArr;
        }
    }


}
