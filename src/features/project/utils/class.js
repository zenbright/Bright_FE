import {v4 as uuidv4} from 'uuid';
// import userDefaultProfile from '../assets/cat.jpg';
import {DEFAULT_TASK_TAGS} from '../assets/values';
import {differenceInDays} from 'date-fns';

export class Column {
  constructor(title) {
    this.id = uuidv4();
    this.title = title;
  }
}

export class Task {
  constructor(columnId, title, des, startDate, endDate, tags = []) {
    this.id = uuidv4();
    this.columnId = columnId;
    this.title = title;
    this.des = des;
    this.tags = this.createTags(tags);
    this.memList = [];
    this.todos = [];
    this.attachments = [];
    this.startDate = startDate;
    this.endDate = endDate;

    const today = new Date();
    if (differenceInDays(today, endDate) > 0) {
      this.addTags(['Late']);
    }
  }

  createTags(tags) {
    return tags.map((tag) => TaskTag.parseTag(tag));
  }

  addTags(newTags) {
    this.tags = [...this.tags, ...this.createTags(newTags)];
  }

  update(title, des, startDate, endDate, tags) {
    this.title = title !== undefined ? title : this.title;
    this.des = des !== undefined ? des : this.des;
    this.startDate = startDate !== undefined ? startDate : this.startDate;
    this.endDate = endDate !== undefined ? endDate : this.endDate;

    if (tags !== undefined) {
      this.tags = this.createTags(tags);
    }
  }
}

export class TaskTag {
  constructor(taskId, title, color) {
    this.id = uuidv4();
    this.taskId = taskId;
    this.title = title;
    this.color = color ? color : DEFAULT_TASK_TAGS[title].color || 'bg-gray-500';
  }

  static parseTag(tag) {
    const tagParts = tag.split('-');
    const tagTitle = tagParts[0].charAt(0).toUpperCase() + tagParts[0].slice(1);
    const tagColor = tagParts[1];

    return new TaskTag(null, tagTitle, tagColor);
  }

  static toString(tag) {
    return tag ? `${tag.title.toLowerCase()}-${tag.color}` : '';
  }
}
