import React from 'react';
import LoginPage from '../../src/component/LoginPage';
import { mount } from 'cypress-react-unit-test';

describe('LoginPage', () => {
	it('renders', () => {
		mount(<LoginPage />);
	});
});
