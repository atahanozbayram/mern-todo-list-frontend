import React from 'react';
import '../style/reset.css';
import styles from '../style/Todo.module.css';

function Todo(props) {
	return (
		<div className={styles['todo']}>
			<div>
				<p>{/* todos content*/}</p>
				<button>COMPLETE{/* complete/uncomplete button */}</button>
				<button className={styles['delete']}>
					DELETE{/* button to delete the todo */}
				</button>
			</div>
		</div>
	);
}

export { Todo as default };
