export interface IExercise {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface IWorkout {
  id: string;
  name: string;
  description: string;
  exercises: IExercise[];
  playlistURl: string;
  imageUrl: string;
  featured: boolean;
  category: string;
}

export interface ICollection {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  featured: boolean;
  category: string;
  workouts: IWorkout[];
}

export interface IUserData {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  createdWorkouts: string[]; // workout ids
}
