import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

import Plateau from './Plateau';

describe('<Plateau/>', () => {
  it('renders three `.foo-bar`s', () => {
    const wrapper = render(<Plateau />);
    expect(wrapper.find('.foo-bar')).to.have.lengthOf(3);
  });

  it('renders the title', () => {
    const wrapper = render(<Foo title="unique" />);
    expect(wrapper.text()).to.contain('unique');
  });
});