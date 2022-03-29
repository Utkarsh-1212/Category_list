import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './pipe/filter.pipe';
// import { FilterModule } from './filter/filter.module';

import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { AddCategoryComponent } from './add-category/add-category.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    FilterPipe,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
