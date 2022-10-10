import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  /**
   * @todo retrieve list from outside (???) / web (???)
   */
  private books: Book[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: 'How to Win Friends and Influence ...',
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ...",
    },
  ];

  /**
   *
   * @param client
   * @param URL
   */
  constructor(
    private readonly client: HttpClient,
    @Inject('REST_API') private readonly URL: string
  ) {}

  /**
   *
   * @returns
   */
  getAll(): Observable<Book[]> {
    const url = this.URL;
    return this.client.get<Book[]>(url).pipe(
      catchError((err, caught) => {
        console.warn(err);
        return of(this.books);
      })
    );
  }
}
