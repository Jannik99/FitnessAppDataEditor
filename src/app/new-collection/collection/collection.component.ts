import { Component, Input, OnInit } from '@angular/core';
import { IWorkout } from 'src/app/shared/interfaces';
import { SaveDataTemporaryService } from 'src/app/shared/save-data-temporary.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  @Input() index!: number;
  isAddWorkoutOpen: boolean = false;

  constructor(public dataService: SaveDataTemporaryService) {}

  ngOnInit(): void {}

  openAddWorkout(): void {
    this.isAddWorkoutOpen = !this.isAddWorkoutOpen;
  }

  addWorkoutToCollection(workout: IWorkout): void {
    this.dataService.collections[this.index].workouts.push(workout);
  }
}
