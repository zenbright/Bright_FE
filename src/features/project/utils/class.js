import { differenceInDays } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

// import userDefaultProfile from '../assets/cat.jpg';
import { DEFAULT_TASK_TAGS } from '../assets/values';

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
    return tags.map(tag => {
      const tagParts = tag.split('-');
      const tagTitle =
        tagParts[0].charAt(0).toUpperCase() + tagParts[0].slice(1);
      const tagColor = tagParts[1];

      return new TaskTag(this.id, tagTitle, tagColor);
    });
  }
  addTags(newTags) {
    this.tags = [...this.tags, ...this.createTags(newTags)];
  }
}

export class TaskTag {
  constructor(taskId, title, color) {
    this.id = uuidv4();
    this.taskId = taskId;
    this.title = title;
    this.color = color
      ? color
      : DEFAULT_TASK_TAGS[title].color || 'bg-gray-500';
  }
}

const ActivitySubtitles = {
  create: "created a new task",
  update: "updated the task status to",
  assign: "assigned to",
  comment: "left a comment",
};

export class TaskActivity {
  constructor(id, author, activityType, updatedAt = null, comment = null, target = null) {
    this.id = id;
    this.subtitle = ActivitySubtitles[activityType] || '';
    this.createdAt = new Date();
    this.updatedAt = updatedAt ? new Date(updatedAt) : this.createdAt;
    this.author = author;
    this.activityType = activityType.toLowerCase();

    switch (this.activityType) {
      case 'comment':
        this.comment = comment;
        break;
      case 'assign':
      case 'update':
        this.target = target;
        break;
      default:
        this.comment = null;
        this.target = null;
        break;
    }
  }
}
