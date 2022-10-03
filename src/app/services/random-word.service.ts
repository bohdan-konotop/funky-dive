import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'https://random-word-api.herokuapp.com/word';

@Injectable({
  providedIn: 'root',
})
export class RandomWordService {
  constructor(private http: HttpClient) {}

  public getWord(): Observable<string[]> {
    return this.http.get<string[]>(URL);
  }
}
