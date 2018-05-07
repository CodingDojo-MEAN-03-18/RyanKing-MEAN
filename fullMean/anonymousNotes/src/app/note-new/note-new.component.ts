import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css'],
})
export class NoteNewComponent implements OnInit {
  constructor(private noteService: NoteService) {}

  ngOnInit() {}

  onSubmit(form) {
    this.noteService.createNote(form.value);
    this.noteService.noteCreated.emit();
    form.reset();
  }
}
