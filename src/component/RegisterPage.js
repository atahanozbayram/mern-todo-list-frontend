import React from 'react';
import '../style/reset.css';
import RegisterHeader from './RegisterHeader';
import RegisterForm from './RegisterForm';
import styles from '../style/RegisterPage.module.css';

function RegisterPage() {
	return (
		<div className={styles['RegisterPage']}>
			<RegisterHeader />
			<RegisterForm />
		</div>
	);
}

export { RegisterPage as default };
