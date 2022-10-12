import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { BehaviorSubject, map } from 'rxjs';

/**
 *
 */
@Injectable({
  providedIn: 'root',
})
export class CartService {
  /**
   * @link {https://rxjs.dev/guide/subject#behaviorsubject}
   */
  private readonly books$$ = new BehaviorSubject<Book[]>([]);

  /**
   *
   */
  readonly books$ = this.books$$.asObservable();

  /**
   *
   */
  readonly count$ = this.books$.pipe(map((books) => books.length));

  /**
   *
   * @param book
   */
  addBook(book: Book): void {
    /**
     * Create new array and add new book
     * @link {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment}
     */
    const books = [...this.books$$.getValue(), book];
    /**
     * Update Subject
     */
    this.books$$.next(books);
  }
}
