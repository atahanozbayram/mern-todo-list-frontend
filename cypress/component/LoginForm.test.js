import React from 'react';
import { mount } from 'cypress-react-unit-test';
import LoginForm from '../../src/component/LoginForm';

describe('LoginForm', () => {
	it('renders', () => {
		mount(<LoginForm />);
	});
});
