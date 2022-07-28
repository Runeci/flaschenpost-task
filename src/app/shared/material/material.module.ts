import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    exports: [
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatDividerModule,
        MatSlideToggleModule,
    ]
})
export class MaterialModule {
}
