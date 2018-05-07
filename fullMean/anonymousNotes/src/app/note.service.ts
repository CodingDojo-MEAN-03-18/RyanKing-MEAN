import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private base = '/api/notes';
  noteCreated = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.base);
  }

  createNote(note: Note) {
    this.http.post<Note>(this.base, note).subscribe(
      newNote => {
        console.log('new note', newNote);
        this.getNotes();
      },
      error => console.log('error', error)
    );
  }
}
