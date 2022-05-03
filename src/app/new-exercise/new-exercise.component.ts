import { Component, OnInit } from '@angular/core';
import { SaveDataTemporaryService } from '../shared/save-data-temporary.service';

@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.scss'],
})
export class NewExerciseComponent implements OnInit {
  constructor(public dataService: SaveDataTemporaryService) {}

  ngOnInit(): void {}

  addExercise() {
    let exercise = { ...this.dataService.sampleExercise };
    exercise.id = this.dataService.getID();
    this.dataService.addExercise(exercise);
  }

  copyExercises() {
    navigator.clipboard.writeText(this.dataService.getExercisesJSON());
  }

  saveToLocaleStorage() {
    localStorage.setItem('exercises', this.dataService.getExercisesJSON());
  }

  loadFromLocaleStorage() {
    this.dataService.loadFromLocaleStorage();
  }
}
