import {Component, OnInit, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  //encapsulation: ViewEncapsulation.Native
  //encapsulation: ViewEncapsulation.None
})
export class JokeFormComponent implements OnInit {

  @Output() jokeCreated = new EventEmitter<Joke>();

  constructor() {
  }

  ngOnInit() {
  }

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

}