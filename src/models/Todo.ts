export class Todo {
  id: number;
  text: string;
  date: Date;
  done: boolean;

  constructor(input: string) {
    this.text = input;
    this.date = new Date();
    this.id = Math.round(Math.random() * 1000);
    this.done = false;
  }
}
