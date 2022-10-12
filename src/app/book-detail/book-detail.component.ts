import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book$?: Observable<Book>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: BookApiService
  ) {}

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    console.log(isbn);
    // this.route.snapshot.data.book;
    this.book$ = this.service.getBookByIsbn(isbn as string);
  }
}
