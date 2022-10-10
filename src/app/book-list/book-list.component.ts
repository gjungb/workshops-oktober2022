import { Component, OnInit } from '@angular/core';
import { interval, tap } from 'rxjs';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

/**
 * Stateful Component
 */
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  /**
   * Retrieve list from outside
   */
  books?: Book[];

  /**
   * Dependency Injection
   */
  constructor(private readonly bookApi: BookApiService) {}

  /**
   * React to state change
   */
  ngOnInit(): void {
    // ticker
    const ticker$ = interval(2_000);

    // @todo remove memory leak
    ticker$.pipe(tap((x) => console.log(x))).subscribe();

    this.bookApi
      .getAll()
      .pipe(tap((x) => console.log(x)))
      .subscribe({
        next: (value) => (this.books = value),
        complete: () => console.log('Books loaded'),
      });
  }

  /**
   *
   * @param book
   */
  goToBookDetails(book: Book): void {
    // effect
    console.log('Navigate to book details, soon...');
    console.log(book);
  }
}
