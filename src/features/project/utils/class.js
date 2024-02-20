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
  }
}
