import React from 'react';
import ReactDOM from 'react-dom';
import RegisterPage from '../../src/component/RegisterPage';

function test() {
	const wrapper = document.getElementById('root');
	ReactDOM.render(<RegisterPage />, wrapper);
}

test();

if (module.hot) {
	module.hot.accept(test);
}
