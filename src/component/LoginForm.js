import React from 'react';
import '../style/reset.css';
import styles from '../style/LoginForm.module.css';

function LoginForm(props) {
	return (
		<div className={styles['LoginForm']}>
			<form>
				<div className={styles['LoginForm__input-field']}>
					<input
						type="email"
						name="email"
						placeholder="E-mail"
						autoComplete="off"
					/>
					<label>E-mail:</label>
				</div>

				<div className={styles['LoginForm__input-field']}>
					<input
						type="password"
						name="password"
						placeholder="Password"
						autoComplete="off"
					/>
					<label>Password:</label>
				</div>
				<div>
					<button>Login</button>
				</div>
			</form>
		</div>
	);
}

export { LoginForm as default };
