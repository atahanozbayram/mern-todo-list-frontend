import React from 'react';
import '../../style/reset.css';
import styles from '../../style/TodoAdd.module.css';

function TodoAdd(props) {
	return (
		<div className={styles['todoAdd']}>
			<form>
				<div>
					<label>Todo:</label>
					<input type="text" />
					<button>ADD</button>
				</div>
			</form>
		</div>
	);
}

export { TodoAdd as default };
