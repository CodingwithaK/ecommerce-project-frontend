import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from  '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  //reference to our product service
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
