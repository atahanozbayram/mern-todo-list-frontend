import React from 'react';
import ReactDOM from 'react-dom';
import RegisterPage from '../../src/component/RegisterPage';
import LoginPage from '../../src/component/LoginPage';
import TodoPage from '../../src/component/TodoPage';

function test() {
	const wrapper = document.getElementById('root');
	ReactDOM.render(<LoginPage />, wrapper);
}

test();

if (module.hot) {
	module.hot.accept(test);
}
