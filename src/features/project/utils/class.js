import {v4 as uuidv4} from 'uuid';

export class Column {
  constructor(title) {
    this.id = uuidv4();
    this.title = title;
  }
}

export class Task {
  constructor(columnId, title, des) {
    this.id = uuidv4();
    this.columnId = columnId;
    this.title = title;
    this.des = des;
    this.tags = [new TaskTag(this.id, 'In progress'), new TaskTag(this.id, 'Pending')];
  }
}

export class TaskTag {
  constructor(taskId, title) {
    this.id = uuidv4();
    this.taskId = taskId;
    this.title = title;

    const tagColors = {
      'Medium': 'bg-amber-400',
      'High': 'bg-rose-500',
      'Low': 'bg-green-500',
      'Late': 'bg-rose-500',
      'Urgent': 'bg-violet-700',
      'In progress': 'bg-orange-400',
    };

    this.bg = tagColors[title] || 'bg-gray-500';
  }
}
