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

@NgModule({
  declarations: [
    AppComponent,
    BeveragesPageComponent,
    HeaderComponent,
    BeveragesDetailViewComponent,
    BeveragesBottleViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
