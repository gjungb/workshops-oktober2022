import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookExistsGuard } from './book-exists.guard';
import { BookListComponent } from './book-list/book-list.component';

// @todo add route configuration(s)
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books',
  },
  {
    path: 'books',
    children: [
      {
        path: '',
        component: BookListComponent,
      },
      {
        path: 'detail/:isbn',
        component: BookDetailComponent,
        canActivate: [BookExistsGuard],
        resolve: {
          book: BookExistsGuard,
        },
      },
    ],
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
