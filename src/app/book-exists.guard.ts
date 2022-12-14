import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookApiService } from './shared/book-api.service';

@Injectable({
  providedIn: 'root',
})
export class BookExistsGuard implements CanActivate {
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
  canActivate(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.api.hasBook(route.paramMap.get('isbn'));
  }
}
