import {v4 as uuidv4} from 'uuid';
// import userDefaultProfile from '../assets/cat.jpg';
import {DEFAULT_TASK_TAGS} from '../assets/values';

export class Column {
  constructor(title) {
    this.id = uuidv4();
    this.title = title;
  }
}

// Define default tags as constants
const DEFAULT_TAGS = ['In Progress'];

// const SAMPLE_MEMLIST = [];
// const SAMPLE_MEMLIST = [
//   {name: 'John Doe', imageUrl: userDefaultProfile},
//   {name: 'Jane Smith', imageUrl: userDefaultProfile},
//   {name: 'Michael Johnson', imageUrl: userDefaultProfile},
//   {name: 'Michael Johnson', imageUrl: userDefaultProfile},
//   {name: 'Michael Johnson', imageUrl: userDefaultProfile},
//   {name: 'Michael Johnson', imageUrl: userDefaultProfile},
// ];

export class Task {
  constructor(columnId, title, des) {
    this.id = uuidv4();
    this.columnId = columnId;
    this.title = title;
    this.des = des;
    this.tags = this.createTags(DEFAULT_TAGS);
    this.memList = [];
  }

  createTags(tags) {
    return tags.map((tag) => new TaskTag(this.id, tag));
  }

  addTags(newTags) {
    this.tags = [...this.tags, ...this.createTags(newTags)];
  }
}

export class TaskTag {
  constructor(taskId, title) {
    this.id = uuidv4();
    this.taskId = taskId;
    this.title = title;
    this.bg = DEFAULT_TASK_TAGS[title].color || 'bg-gray-500';
    console.log(this.bg);
  }
}
