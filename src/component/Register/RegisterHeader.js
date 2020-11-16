import React from 'react';
import '../../style/reset.css';
import generalStyles from '../../style/general.module.css';

function RegisterHeader() {
	return (
		<div className={generalStyles['header']}>
			<h2>Register Page</h2>
		</div>
	);
}

export { RegisterHeader as default };
