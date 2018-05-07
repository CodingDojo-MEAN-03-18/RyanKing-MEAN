import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  all_notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      this.all_notes = notes;
    });

    this.noteService.noteCreated.subscribe(() => {
      this.noteService.getNotes().subscribe(notes => {
        this.all_notes = notes;
      });
    });
  }
}
