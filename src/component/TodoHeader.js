import React from 'react';
import '../style/reset.css';
import styles from '../style/TodoHeader.module.css';

function TodoHeader(props) {
	return (
		<div className={styles['todoHeader']}>
			<h2>Todo List</h2>
		</div>
	);
}

export { TodoHeader as default };
