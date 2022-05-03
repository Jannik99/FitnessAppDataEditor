import { Component, OnInit } from '@angular/core';
import { SaveDataTemporaryService } from '../shared/save-data-temporary.service';

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.scss'],
})
export class NewWorkoutComponent implements OnInit {
  constructor(public dataService: SaveDataTemporaryService) {}

  ngOnInit(): void {}

  addWorkout() {
    let workout = { ...this.dataService.sampleWorkout };
    workout.id = this.dataService.getID();
    this.dataService.addWorkout(workout);
  }

  copyWorkouts() {
    navigator.clipboard.writeText(this.dataService.getWorkoutsJSON());
  }

  saveToLocaleStorage() {
    localStorage.setItem('workouts', this.dataService.getWorkoutsJSON());
  }

  loadFromLocaleStorage() {
    this.dataService.loadFromLocaleStorage();
  }
}
