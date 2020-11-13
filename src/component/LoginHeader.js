import React from 'react';
import '../style/reset.css';
import generalStyles from '../style/general.module.css';

function LoginHeader() {
	return (
		<div className={generalStyles['header']}>
			<h2>Login Page</h2>
		</div>
	);
}

export { LoginHeader as default };
