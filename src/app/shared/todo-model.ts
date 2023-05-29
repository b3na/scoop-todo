export class Todo { 
  id!: string;
  description!: string;
  dueDate!: Date;
  priority!: string;
  constructor(){
    this.priority = '1';
  }
}