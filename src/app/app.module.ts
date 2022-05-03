import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { ExerciseComponent } from './new-exercise/exercise/exercise.component';
import { NewExerciseComponent } from './new-exercise/new-exercise.component';
import { WorkoutComponent } from './new-workout/app-workout/workout.component';
import { NewWorkoutComponent } from './new-workout/new-workout.component';
import { BasicModule } from './shared/basic.module';
import { CollectionComponent } from './new-collection/collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    NewExerciseComponent,
    NewWorkoutComponent,
    NewCollectionComponent,
    ExerciseComponent,
    WorkoutComponent,
    CollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BasicModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
