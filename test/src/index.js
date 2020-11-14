import React from 'react';
import ReactDOM from 'react-dom';
import TodoPage from '../../src/component/TodoPage';
import LoginPage from '../../src/component/LoginPage';

function test() {
	const wrapper = document.getElementById('root');
	ReactDOM.render(<LoginPage />, wrapper);
}

test();

if (module.hot) {
	module.hot.accept(test);
}
