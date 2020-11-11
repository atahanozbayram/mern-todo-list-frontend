import React from 'react';

function LoginForm(props) {
	return (
		<div>
			<form>
				<div>
					<label>E-mail:</label>
					<input type="email" name="email" />
				</div>

				<div>
					<label>Password:</label>
					<input type="password" name="password" />
				</div>
				<div>
					<button>Login</button>
				</div>
			</form>
		</div>
	);
}

export { LoginForm as default };
