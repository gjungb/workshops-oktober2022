import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  /**
   *
   */
  book$?: Observable<Book>;

  /**
   *
   * @param route
   */
  constructor(private readonly route: ActivatedRoute) {}

  /**
   *
   */
  ngOnInit(): void {
    // const isbn = this.route.snapshot.paramMap.get('isbn');
    // console.log(isbn);
    // this.book$ = this.service.getBookByIsbn(isbn as string);
    this.book$ = this.route.data.pipe(
      map((d) => d['book']),
      tap((res) => console.log(res))
    );
  }
}
