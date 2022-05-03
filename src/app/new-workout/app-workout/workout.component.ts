import { Component, Input, OnInit } from '@angular/core';
import { IExercise } from 'src/app/shared/interfaces';
import { SaveDataTemporaryService } from 'src/app/shared/save-data-temporary.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  @Input() index!: number;
  isAddExerciseOpen: boolean = false;

  constructor(public dataService: SaveDataTemporaryService) {}

  ngOnInit(): void {}

  openAddExercise(): void {
    this.isAddExerciseOpen = !this.isAddExerciseOpen;
  }

  addExerciseToWorkout(exercise: IExercise): void {
    this.dataService.workouts[this.index].exercises.push(exercise);
  }
}
