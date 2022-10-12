import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { BookApiService } from './book-api.service';

@Injectable({
  providedIn: 'root',
})
export class BookResolver implements Resolve<Book> {
  /**
   *
   * @param api
   */
  constructor(private readonly api: BookApiService) {}

  /**
   *
   * @param route
   * @param _state
   * @returns
   */
  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Book> {
    return this.api.getBookByIsbn(route.paramMap.get('isbn') as string);
  }
}
