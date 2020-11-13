import React from 'react';
import ReactDOM from 'react-dom';
import TodoPage from '../../src/component/TodoPage';

function test() {
	const wrapper = document.getElementById('root');
	ReactDOM.render(<TodoPage />, wrapper);
}

test();

if (module.hot) {
	module.hot.accept(test);
}
