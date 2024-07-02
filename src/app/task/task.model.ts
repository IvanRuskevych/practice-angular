import { UUID } from 'angular2-uuid';

export interface ITask {
  id: string;
  name: string;
  description: string;
}

export class Task implements ITask {
  id: string;
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.id = UUID.UUID();
    this.name = name;
    this.description = description;
  }
}
