import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  private url = 'http://api.openweathermap.org/data/2.5/weather?id=';
  private tail = '&units=imperial&APPID=33ae4a7a7f178bb4bbb51be6850983eb';

  constructor(private http: HttpClient) { }

  getData(id: number): Observable<object> {
    return this.http.get(this.url + id + this.tail);
  }

}
