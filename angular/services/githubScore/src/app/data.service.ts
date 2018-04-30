import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  private base = 'https://api.github.com/users/';
  data: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  getData(name: string): Observable<object> {
    return this.http.get(this.base + name);
  }
}
