import React from 'react';
import TodoPage from '../../src/component/TodoPage';
import { mount } from 'cypress-react-unit-test';

describe('TodoPage', () => {
	it('renders', () => {
		mount(<TodoPage />);
	});
});
