import { Pipe, PipeTransform } from '@angular/core';
import { Beverage, FilterSettings } from '../models/beverages.interfaces';

const MORE_THAN_TWO_FILTER_VALUE = 2;

@Pipe({
    name: 'beveragesFilter',
})
export class BeveragesFilterPipe implements PipeTransform {

    public transform(beveragesArr: Beverage[], settings: FilterSettings): Beverage[] {
        if (!beveragesArr) {
            return beveragesArr;
        }

        let filteredArr = [...beveragesArr];
        filteredArr = this.filterMoreThan2Euro(filteredArr, settings.moreThanTwoEuro);

        return filteredArr;
    }

    private filterMoreThan2Euro(beveragesArr: Beverage[], filterIsOn: boolean): Beverage[] {
        if (!filterIsOn) {
            return beveragesArr;
        }
        return beveragesArr.filter((beverage) => {
            const convertedPriceToNum =
                parseFloat(beverage.articles[0].pricePerUnitText
                    .replace(/[^0-9.,]/g, '')
                    .replace(/,/g, '.'));
            return convertedPriceToNum > MORE_THAN_TWO_FILTER_VALUE;
        });
    }
}
