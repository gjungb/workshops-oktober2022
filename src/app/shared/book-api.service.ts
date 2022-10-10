import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
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

  constructor(private readonly client: HttpClient) {}

  /**
   *
   * @returns
   */
  getAll(): Observable<Book[]> {
    const url = 'http://localhost:4730/books';
    return this.client.get<Book[]>(url).pipe(delay(5_000));
  }
}
