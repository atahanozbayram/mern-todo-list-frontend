import React from 'react';

function TodoPage() {
	return (
		<div>
			<div>Todo List</div>
			<div>
				<div>Todo:</div>
				<div>
					<input type="text" name="todoContent" />
				</div>
				<div>
					<button>Add</button>
				</div>
			</div>
		</div>
	);
}

export { TodoPage as default };
