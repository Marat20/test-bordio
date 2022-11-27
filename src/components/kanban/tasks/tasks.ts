export interface Columns {
  name: string;
  count?: number;
  logo?: string;
  tasks?: Tasks[];
}

interface Tasks {
  name: string;
  time: string;
  color: string;
  done?: boolean;
}

const newTasks = [
  {
    name: 'Check email',
    time: '0:20h',
    color: '#ABE9CE',
  },
  {
    name: 'Compare PPC agencies and make a report for Steven',
    time: '3:00h',
    color: '#D8DCFF',
  },
  {
    name: 'Meeting with Amanda (PR department)',
    time: '0:30h',
    color: '#ABE9CE',
  },
  {
    name: "Get Patrick's approval for homepage new design",
    time: '0:20h',
    color: '#D8DCFF',
  },
];

const scheduledTasks = [
  {
    name: 'Check email',
    time: '0:20h',
    color: '#FFDFBA',
  },
  {
    name: 'Write a blogpost "7 best strategies for SEO in 2020"',
    time: '5:00h',
    color: '#FEC6B7',
  },
  {
    name: 'New Ad copies for Manamaja',
    time: '2:00h',
    color: '#D9E6A2',
  },
];

const inProgressTasks = [
  {
    name: 'Check email',
    time: '0:20h',
    color: '#FFDFBA',
  },
  {
    name: "Record a video comment about last week's analytics report",
    time: '0:20h',
    color: '#F2BAE1',
  },
  {
    name: 'Process all resumes for Content Marketer position',
    time: '1:00h',
    color: '#FFDFBA',
  },
];

const completedTasks = [
  {
    name: 'Check email',
    time: '0:20h',
    color: '#F0F0F0',
    done: true,
  },
  {
    name: 'Weekly planning session',
    time: '0:45h',
    color: '#F0F0F0',
    done: true,
  },

  {
    name: 'Create 5+ target audiences in Facebook for Samsung ...',
    time: '2:30h',
    color: '#F0F0F0',
    done: true,
  },

  {
    name: 'Check FB Banner Design and give feedback',
    time: '0:20h',
    color: '#F0F0F0',
    done: true,
  },

  {
    name: 'Check email',
    time: '0:20h',
    color: '#F0F0F0',
    done: true,
  },
];

export const columns: Columns[] = [
  {
    name: 'New task',
    count: 4,
    tasks: newTasks,
  },
  {
    name: 'Scheduled',
    count: 3,
    tasks: scheduledTasks,
  },
  {
    name: 'In progress',
    count: 3,
    tasks: inProgressTasks,
  },
  {
    name: 'Completed',
    count: 5,
    tasks: completedTasks,
  },
];
