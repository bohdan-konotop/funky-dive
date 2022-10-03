import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../interfaces';
import { Observable } from 'rxjs';

const URL = 'https://type.fit/api/quotes';

@Injectable({
  providedIn: 'root',
})
export class RandomQuoteService {
  constructor(private http: HttpClient) {}

  public getQuote(): Observable<Quote[]> {
    return this.http.get<Quote[]>(URL);
  }
}
