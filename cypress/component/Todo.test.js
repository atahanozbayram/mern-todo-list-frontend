import React from 'react';
import { mount } from 'cypress-react-unit-test';
import Todo from '../../src/component/Todo';

describe('Todo', () => {
	it('renders', () => {
		mount(<Todo />);
	});
});
