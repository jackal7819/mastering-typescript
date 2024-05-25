import { useEffect, useState } from 'react';

import Form from './components/Form';
import List from './components/List';
import { Task } from '../types';
import { loadTasks, saveTasks } from './services/storage';

export default function App() {
	const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

	const addTask = (task: Task) => {
		setTasks([...tasks, task]);
	};

	const toggleTask = ({ id }: { id: string }) => {
		setTasks(
			tasks.map((task) =>
				task.id === id
					? { ...task, isCompleted: !task.isCompleted }
					: task
			)
		);
	};

	useEffect(() => {
		saveTasks(tasks);
	}, [tasks]);

	return (
		<main>
			<section>
				<Form addTask={addTask} />
				<List tasks={tasks} toggleTask={toggleTask} />
			</section>
		</main>
	);
}
