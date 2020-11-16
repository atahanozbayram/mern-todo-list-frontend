import React from 'react';
import '../../style/reset.css';
import styles from '../../style/LoginForm.module.css';

function LoginForm(props) {
	return (
		<div className={styles['LoginForm']}>
			<form>
				<div>
					<div>
						<label>E-mail:</label>
					</div>
					<input
						type="text"
						name="email"
						className={styles['LoginForm__input-text']}
						autoComplete="off"
					/>
				</div>
				<div>
					<div>
						<label>Password:</label>
					</div>
					<input
						type="password"
						name="password"
						className={styles['LoginForm__input-text']}
						autoComplete="off"
					/>
				</div>
				<div>
					<button>Login</button>
				</div>
			</form>
		</div>
	);
}

export { LoginForm as default };
