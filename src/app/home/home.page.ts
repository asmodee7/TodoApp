import { Component } from '@angular/core';
import { Task } from '../models/task';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage: Storage) { 
    this.storage.get('tasks').then(tasks=>{
      if (null!== tasks) {
        
        this.tasks = tasks;
      }
    });
  }


  title = 'Mes Tâches à faire';

  /**Création de tâche */
  task: Task = new Task();

  // Tableau de la liste des taches ( tasks )
  tasks: Task[] = [
    {
      id: 1,
      name: 'Faire les courses',
      status: false
    },
    {
      id: 4,
      name: 'Tondre la pelouse',
      status: false
    },
    {
      id: 3,
      name: 'Faire la cuisine',
      status: true
    },
    {
      id: 4,
      name: 'Faire du RUST sa paye !',
      status: false
    }

  ];


  /** Ajouté un tache dans le tableau TASKS */
  addTask() {
    if (this.task.name && this.task.name.length > 0) {

      console.log(this.task);

      this.tasks.push(this.task);

      // Sauvegarde de la task
      this.saveTasks();

      this.task = new Task();

    }
  }
  enterDetection(code: string) {
    if (code === "Enter" || code === "NumpadEnter")
      this.addTask();
  }

  deleteTask(task:Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    this.saveTasks();
  }

  saveTasks(){
    this.storage.set('tasks',this.tasks);
  }


}
 