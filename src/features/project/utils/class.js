import {v4 as uuidv4} from 'uuid';
import userDefaultProfile from '../assets/cat.jpg';
export class Column {
  constructor(title) {
    this.id = uuidv4();
    this.title = title;
  }
}

// Define default tags as constants
const DEFAULT_TAGS = ['In progress', 'Low'];
// const SAMPLE_MEMLIST = [];
const SAMPLE_MEMLIST = [
  {name: 'John Doe', imageUrl: userDefaultProfile},
  {name: 'Jane Smith', imageUrl: userDefaultProfile},
  {name: 'Michael Johnson', imageUrl: userDefaultProfile},
  {name: 'Michael Johnson', imageUrl: userDefaultProfile},
  {name: 'Michael Johnson', imageUrl: userDefaultProfile},
  {name: 'Michael Johnson', imageUrl: userDefaultProfile},
];

export class Task {
  constructor(columnId, title, des) {
    this.id = uuidv4();
    this.columnId = columnId;
    this.title = title;
    this.des = des;
    this.tags = this.createTags(DEFAULT_TAGS);
    this.memList = SAMPLE_MEMLIST;
  }

  createTags(tags) {
    return tags.map((tag) => new TaskTag(this.id, tag));
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
