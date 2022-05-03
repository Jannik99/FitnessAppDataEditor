import { Injectable } from '@angular/core';
import { ICollection, IExercise, IWorkout } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class SaveDataTemporaryService {
  exercises: IExercise[] = [];
  workouts: IWorkout[] = [];
  collections: ICollection[] = [];

  sampleExercise: IExercise = {
    id: this.getID(),
    name: 'Exercise name',
    description: 'Exercise description',
    imageUrl: 'https://via.placeholder.com/150',
  };

  sampleWorkout: IWorkout = {
    id: this.getID(),
    name: 'Workout name',
    description: 'Workout description',
    exercises: [this.sampleExercise],
    playlistURl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: 'https://via.placeholder.com/150',
    featured: false,
    category: 'Category',
  };

  sampleCollection: ICollection = {
    id: this.getID(),
    name: 'Collection name',
    description: 'Collection description',
    imageUrl: 'https://via.placeholder.com/150',
    featured: false,
    category: 'Category',
    workouts: [this.sampleWorkout],
  };

  constructor() {}

  addExercise(exercise: IExercise) {
    this.exercises.push(exercise);
  }

  addWorkout(workout: IWorkout) {
    this.workouts.push(workout);
  }

  addCollection(collection: ICollection) {
    this.collections.push(collection);
  }

  changeExercise(index: number, exercise: IExercise) {
    this.exercises[index] = exercise;
  }

  changeWorkout(index: number, workout: IWorkout) {
    this.workouts[index] = workout;
  }

  changeCollection(index: number, collection: ICollection) {
    this.collections[index] = collection;
  }

  removeExercise(index: number) {
    this.exercises.splice(index, 1);
  }

  removeWorkout(index: number) {
    this.workouts.splice(index, 1);
  }

  removeCollection(index: number) {
    this.collections.splice(index, 1);
  }

  getExercisesJSON() {
    return JSON.stringify(this.exercises);
  }

  getWorkoutsJSON() {
    return JSON.stringify(this.workouts);
  }

  getCollectionsJSON() {
    return JSON.stringify(this.collections);
  }

  getID(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  loadFromLocaleStorage() {
    if (localStorage.getItem('exercises')) {
      this.exercises = JSON.parse(localStorage.getItem('exercises')!);
    }
    if (localStorage.getItem('workouts')) {
      this.workouts = JSON.parse(localStorage.getItem('workouts')!);
    }
    if (localStorage.getItem('collections')) {
      this.collections = JSON.parse(localStorage.getItem('collections')!);
    }
  }
}
