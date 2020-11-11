import React from 'react';

export default function RegisterForm() {
	return (
		<div>
			<form>
				<div>
					<label>First name:</label>
					<input type="text" name="firstName" />
				</div>

				<div>
					<label>Last name:</label>
					<input type="text" name="lastName" />
				</div>

				<div>
					<label>E-mail:</label>
					<input type="email" name="email" />
				</div>

				<div>
					<label>E-mail confirmation:</label>
					<input type="email" name="emailConfirmation" />
				</div>

				<div>
					<label>Password:</label>
					<input type="password" name="password" />
				</div>

				<div>
					<label>Password confirmation:</label>
					<input type="password" name="passwordConfirmation" />
				</div>

				<div>
					<button>Register</button>
				</div>
			</form>
		</div>
	);
}
