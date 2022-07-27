import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatCardModule,
    ],
    exports: [
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatDividerModule,
    ]
})
export class MaterialModule {
}
