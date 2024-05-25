import { Task } from '../../types';

type ListProps = {
	tasks: Task[];
	toggleTask: ({ id }: { id: string }) => void;
};

export default function List({ tasks, toggleTask }: ListProps) {
	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>
					<p className='text'>{task.description}</p>
					<input
						type='checkbox'
						checked={task.isCompleted}
						onChange={() => toggleTask({ id: task.id })}
					/>
				</li>
			))}
		</ul>
	);
}
