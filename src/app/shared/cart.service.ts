import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private books: Book[] = [];

  private readonly books$$ = new BehaviorSubject<Book[]>([]);

  readonly books$ = this.books$$.asObservable();

  constructor() {}

  addBook(book: Book): void {
    this.books.push(book);
    this.books$$.next(this.books);
  }
}
