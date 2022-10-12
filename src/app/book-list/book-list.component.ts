import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  combineLatest,
  interval,
  map,
  Observable,
  startWith,
  Subject,
  Subscription,
  tap,
} from 'rxjs';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';
import { CartService } from '../shared/cart.service';

/**
 * Stateful Component
 */
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  /**
   * Retrieve list from outside
   */
  books?: Book[];

  /**
   *
   */
  books$: Observable<Book[]> = this.bookApi.getAll().pipe(startWith([]));

  /**
   *
   */
  ticker$: Observable<number> = interval(3_000).pipe(
    startWith(0),
    map((v) => v + 1)
  );

  /**
   *
   */
  ui$ = combineLatest([this.books$, this.ticker$]).pipe(
    map(([books, ticker]) => ({ books, ticker }))
  );

  /**
   *
   */
  private sub = Subscription.EMPTY;

  /**
   *
   */
  private destroy$ = new Subject<void>();

  /**
   * Dependency Injection
   */
  constructor(
    private readonly bookApi: BookApiService,
    private readonly router: Router,
    private readonly cart: CartService
  ) {}

  /**
   * React to state change
   */
  ngOnInit(): void {
    // ticker
    const ticker$ = interval(2_000);

    // remove memory leak
    this.sub = ticker$.pipe(tap((x) => console.log(x))).subscribe();

    /**
     *
     */
    // this.bookApi
    //   .getAll()
    //   .pipe(
    //     tap((x) => console.log(x)),
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe({
    //     next: (value) => (this.books = value),
    //     complete: () => console.log('Books loaded'),
    //   });
  }

  /**
   *
   */
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.destroy$.next();
  }

  /**
   *
   * @param book
   */
  goToBookDetails(book: Book): void {
    // effect
    console.log('Navigate to book details, soon...');
    console.log(book);
    // this.router.navigate(['books', 'detail', book.isbn], {});
    this.cart.addBook(book);
  }
}
