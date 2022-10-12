import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.fb.nonNullable.control<string | null>(null, {
        validators: [Validators.required, Validators.minLength(2)],
      }),
    });

    const ctrl = this.form.get('title') as AbstractControl;

    ctrl.valueChanges
      .pipe(
        debounceTime(300),
        tap((v) => console.log(v))
      )
      .subscribe();
  }

  saveBook(book: unknown): void {
    // effect
    console.log(book);
  }
}
