import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { AppIsbnPipe } from './shared/app-isbn.pipe';
import { CartCountComponent } from './cart-count/cart-count.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BookListComponent,
    AppIsbnPipe,
    BookDetailComponent,
    BookNewComponent,
    CartCountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: 'REST_API',
      useValue: 'http://localhost:4730/books',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
