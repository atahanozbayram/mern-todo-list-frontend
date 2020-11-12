import React from 'react';
import '../style/reset.css';
import TodoHeader from './TodoHeader';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

function TodoPage() {
	return (
		<div>
			<TodoHeader />
			<TodoAdd />
			<TodoList />
		</div>
	);
}

export { TodoPage as default };
