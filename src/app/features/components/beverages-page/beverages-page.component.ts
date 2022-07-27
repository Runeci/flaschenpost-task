import { Component, OnInit } from '@angular/core';
import { BeveragesApiService } from '../../../core/services/beverages-api.service';
import { Beverage } from '../../../shared/models/beverages.interfaces';

@Component({
  selector: 'app-beverages-page',
  templateUrl: './beverages-page.component.html',
  styleUrls: ['./beverages-page.component.scss']
})
export class BeveragesPageComponent implements OnInit {
  public beverages: Beverage[] = [];

  constructor(private beveragesApiService: BeveragesApiService) { }

  public ngOnInit(): void {
    this.beveragesApiService.getBeverages()
      .subscribe((beverages) => this.beverages = beverages);
  }
}
