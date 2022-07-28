import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeveragesPageComponent } from './features/beverages/beverages-page/beverages-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BeveragesDetailViewComponent } from './features/beverages/beverages-detail-view/beverages-detail-view.component';
import { MaterialModule } from './shared/material/material.module';
import { BeveragesBottleViewComponent } from './features/beverages/beverages-bottle-view/beverages-bottle-view.component';
import { MatIconModule } from '@angular/material/icon';
import { FilterComponent } from './features/filter/filter.component';
import { BeveragesFilterPipe } from './shared/pipes/beverages-filter.pipe';
import { FormsModule } from '@angular/forms';
import { BeveragesSortPipe } from './shared/pipes/beverages-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BeveragesPageComponent,
    HeaderComponent,
    BeveragesDetailViewComponent,
    BeveragesBottleViewComponent,
    FilterComponent,
    BeveragesFilterPipe,
    BeveragesSortPipe,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        MatIconModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
