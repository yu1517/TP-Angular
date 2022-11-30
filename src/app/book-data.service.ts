import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from './book-list/Book';

const URL = 'https://63867c21d9b24b1be3d94d20.mockapi.io/books';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http:HttpClient) { }

  /**Consume la API de libros y devuelve un observable a la respuesta.   */
  public getAll(): Observable<Book[]> {
    //fetch('url', {method: 'GET'})
    return this.http.get<Book[]>(URL).pipe(
      tap((books: Book[]) => books.forEach(book => book.quantity = 0))
    );
  }
}
