import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Case />);
  });

  describe('isCaseFull', () => {
    it('Should return false at startup', () => {
      expect(wrapper.instance().isCaseFull()).toBe(false);
    });
  });

  describe('getWinner', () => {
    it('Should return false at startup', () => {
        expect(wrapper.instance.getWinner()).toBe(null);
    });

    it('Should return true is a player win', () => {
        expect(wrapper.instance.getWinner()).toBe(true);
    });
  });

});