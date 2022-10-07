import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Book } from '../model/book';

/**
 * A component to diplay a single book
 * Representational Component / Dumb Component (only depends on Inputs)
 * Stateless Component
 * @todo add styling
 */
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent {
  /**
   * The book to be displayed
   */
  @Input('myBook')
  content?: Book;

  /**
   * Step factor to increment/decrement the value.
   * @default 1
   */
  @Input()
  step = 2;

  /**
   *
   */
  @Output()
  detailClick = new EventEmitter<Book>();

  /**
   *
   */
  color = 'goldenrod';

  /**
   *
   */
  customStyle = {
    color: 'red',
    backgroundColor: 'yellow',
  };

  /**
   *
   */
  handleDetailClick(ev: MouseEvent): void {
    // effect
    console.log('clicked', ev.clientX);
    this.detailClick.emit(this.content);
  }
}
