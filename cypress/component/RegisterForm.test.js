import React from 'react';
import { mount } from 'cypress-react-unit-test';
import RegisterForm from '../../src/component/RegisterForm';

describe('RegisterForm', () => {
	it('renders the form', () => {
		mount(<RegisterForm />);
	});
});
