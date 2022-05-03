import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { NewExerciseComponent } from './new-exercise/new-exercise.component';
import { NewWorkoutComponent } from './new-workout/new-workout.component';

const routes: Routes = [
  { path: '', redirectTo: 'new-exercise', pathMatch: 'full' },
  { path: 'new-collection', component: NewCollectionComponent },
  { path: 'new-exercise', component: NewExerciseComponent },
  { path: 'new-workout', component: NewWorkoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
