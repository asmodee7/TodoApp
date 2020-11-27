import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './models/task';


@Pipe({
  name: 'tasksFilter',
  pure: false
})
export class TasksFilterPipe implements PipeTransform {

  transform(tasks: Task[], status: Boolean): Task[] {
    return tasks.filter(task => task.status === status);
  }

}
