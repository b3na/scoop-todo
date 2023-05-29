export class Todo { 
  id!: string;
  description!: string;
  dueDate!: Date;
  priority!: PriorityEnum;
}

export enum PriorityEnum {
  Low = 1,
  Medium = 2,
  High = 3
}