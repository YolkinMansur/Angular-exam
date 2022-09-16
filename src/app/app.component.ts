import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public tasks: Task[] = [];
  public text: string = '';
  addTasks(text: any) {
    if (text !== '') {
      this.tasks.push(text);
      this.text = '';
      console.log(this.tasks);
    } else {
      return;
    }
  }
  deleteTasks(task: any) {
    this.tasks = this.tasks.filter((item) => item !== task);
  }
}
