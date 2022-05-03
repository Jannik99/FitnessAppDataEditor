import { Component, Input, OnInit } from '@angular/core';
import { SaveDataTemporaryService } from 'src/app/shared/save-data-temporary.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  @Input() index!: number;

  constructor(public dataService: SaveDataTemporaryService) {}

  ngOnInit(): void {}
}
