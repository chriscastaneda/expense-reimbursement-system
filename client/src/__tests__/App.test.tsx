import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { shallow } from 'enzyme';

//Test All in files except src folder??
describe('App.tsx', () => {
  test('should render', () => {
    const wrapper = shallow(<App />); 
    expect(wrapper).toBeDefined();
  });
})