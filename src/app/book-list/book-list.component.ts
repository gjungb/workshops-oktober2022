import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

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
   * @todo retrieve list from outside (???) / web (???)
   */
  books: Book[] = [
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
   * @todo Dependency Injection
   */
  constructor() {}

  /**
   * React to state change
   */
  ngOnInit(): void {}

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
