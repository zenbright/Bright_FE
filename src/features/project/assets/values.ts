import { CheckSquare, Folder, BookOpenText } from 'lucide-react'

export const DEFAULT_TASK_TAGS = {
    'Medium': {
        value: 'medium',
        color: '#b45309',
        description: 'Tasks with medium priority'
    },
    'High': {
        value: 'high',
        color: '#be123c',
        description: 'Tasks with high priority'
    },
    'Low': {
        value: 'low',
        color: '#047857',
        description: 'Tasks with low priority'
    },
    'Late': {
        value: 'late',
        color: '#9f1239',
        description: 'Tasks that are late'
    },
    'Urgent': {
        value: 'urgent',
        color: '#6b21a8',
        description: 'Urgent tasks'
    },
    'Enhancement': {
        value: 'enhancement',
        color: '#c2410c',
        description: 'Tasks related to enhancements'
    },
    'Fix': {
        value: 'fix',
        color: '#0369a1',
        description: 'Tasks to fix issues'
    },
    'Maintenance': {
        value: 'maintenance',
        color: '#0f766e',
        description: 'Tasks for maintenance'
    },
    'Completed': {
        value: 'completed',
        color: '#15803d',
        description: 'Completed tasks'
    },
    'Review': {
        value: 'review',
        color: '#a21caf',
        description: 'Tasks under review'
    },
};

export const TASK_DETAILED_TABS = [
    { name: 'Overview', icon: '' },
    { name: 'Tasks', icon: '' },
    { name: 'Files', icon: '' },
    { name: 'Discussions', icon: '' },
];