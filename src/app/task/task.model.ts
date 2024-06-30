export interface ITask {
  id?: number;
  name: string;
  description: string;
}

export class Task implements ITask {
  id?: number;
  name: string;
  description: string;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
