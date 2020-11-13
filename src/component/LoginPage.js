import React from 'react';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import '../style/reset.css';
import styles from '../style/LoginPage.module.css';

export default function LoginPage() {
	return (
		<div className={styles['LoginPage']}>
			<LoginHeader />
			<LoginForm />
		</div>
	);
}
