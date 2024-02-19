import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
    imports:[
       CommonModule
    ],
    exports:[
        FormsModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatSnackBarModule,
        MatPaginatorModule,
        MatTableModule,
        MatAutocompleteModule
        
    ]
})

export class sharedModule{}