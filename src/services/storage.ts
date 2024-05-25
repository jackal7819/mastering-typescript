import { Task } from '../../types';

export function loadTasks(): Task[] {
	return JSON.parse(localStorage.getItem('tasks') || '[]');
}

export function saveTasks(tasks: Task[]) {
	localStorage.setItem('tasks', JSON.stringify(tasks));
}
