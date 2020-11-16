import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '../../src/component/Login/LoginPage';

function test() {
	const wrapper = document.getElementById('root');
	ReactDOM.render(<LoginPage />, wrapper);
}

test();

if (module.hot) {
	module.hot.accept(test);
}
