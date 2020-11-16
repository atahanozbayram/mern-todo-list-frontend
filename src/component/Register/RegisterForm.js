import React from 'react';
import '../../style/reset.css';
import styles from '../../style/RegisterForm.module.css';

function RegisterForm(props) {
	return (
		<div className={styles['RegisterForm']}>
			<form>
				<div>
					<div>
						<label>First name:</label>
					</div>
					<input
						type="text"
						name="firstName"
						autoComplete="off"
						className={styles['RegisterForm__input-text']}
					/>
				</div>
				<div>
					<div>
						<label>Last name:</label>
					</div>
					<input
						type="text"
						name="lastName"
						autoComplete="off"
						className={styles['RegisterForm__input-text']}
					/>
				</div>
				<div>
					<div>
						<label>E-mail:</label>
					</div>
					<input
						type="text"
						name="email"
						autoComplete="off"
						className={styles['RegisterForm__input-text']}
					/>
				</div>
				<div>
					<div>
						<label>E-mail confirmation:</label>
					</div>
					<input
						type="text"
						name="emailConfirmation"
						autoComplete="off"
						className={styles['RegisterForm__input-text']}
					/>
				</div>
				<div>
					<div>
						<label>Password:</label>
					</div>
					<input
						type="password"
						name="password"
						autoComplete="off"
						className={styles['RegisterForm__input-text']}
					/>
				</div>
				<div>
					<div>
						<label>Password confirmation:</label>
					</div>
					<input
						type="password"
						name="passwordConfirmation"
						autoComplete="off"
						className={styles['RegisterForm__input-text']}
					/>
				</div>
				<div>
					<button>Register</button>
				</div>
			</form>
		</div>
	);
}

export { RegisterForm as default };
