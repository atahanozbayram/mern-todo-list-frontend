import React from 'react';
import '../../style/reset.css';
import styles from '../../style/TodoHeader.module.css';
import generalStyles from '../../style/general.module.css';

function TodoHeader(props) {
	return (
		<div className={generalStyles['header']}>
			<h2>Todo List</h2>
		</div>
	);
}

export { TodoHeader as default };
