import {v4 as uuidv4} from 'uuid';

export class Column {
  constructor(title) {
    this.id = uuidv4();
    this.title = title;
  }
}

export class Task {
  constructor(columnId, content) {
    this.id = uuidv4();
    this.columnId = columnId;
    this.content = content;
    this.tags = [new TaskTag(this.id, 'Medium'), new TaskTag(this.id, 'Late')];
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
    };

    this.bg = tagColors[title] || 'bg-gray-500';
  }
}
