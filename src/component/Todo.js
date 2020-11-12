import React from 'react';
import '../style/reset.css';

function Todo(props) {
	return (
		<div>
			<div>
				<p>{/* todos content*/}</p>
			</div>
			<div>
				<button>COMPLETE{/* complete/uncomplete button */}</button>
			</div>
			<div>
				<button>DELETE{/* button to delete the todo */}</button>
			</div>
		</div>
	);
}

export { Todo as default };
