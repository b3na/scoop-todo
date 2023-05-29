import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo-model';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(value: Todo[], inputString: string): Todo[] {

    if (value.length === 0 || !inputString) {
      return value;
    }
    let filteredUsers: Todo[] = [];
    for (let todo of value) {
      if (todo.description.toLowerCase().includes(inputString.toLowerCase())) {
        filteredUsers.push(todo);
      }
    }
    return filteredUsers;
  }

}
