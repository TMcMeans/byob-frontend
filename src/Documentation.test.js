import React from 'react';
import Documentation from './Documentation';
import { shallow } from 'enzyme';

describe('Documentation', () => {

  it('renders a snapshot with correct data', () => {
    const wrapper = shallow(<Documentation />);
    expect(wrapper).toMatchSnapshot();
  });
})
