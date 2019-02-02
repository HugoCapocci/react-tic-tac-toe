import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game';

describe('Game tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Game />);
  });

  describe('isBoardFull', () => {
    it('Should return false at startup', () => {
      expect(wrapper.instance().isBoardFull()).toBe(false);
    });

    it('Should return true if board is full', () => {
      wrapper.setState({
        history: [
          { grid: Array(9).fill('Y') }
        ],
        currentStep: 0
      });

      expect(wrapper.instance().isBoardFull()).toBe(true);
    });
  });

  describe('getWinner', () => {
    it('Should return null at startup', () => {
      expect(wrapper.instance().getWinner()).toBe(null);
    });

    it('Should return X when first player has fullfill firt row', () => {
       wrapper.setState({
        history: [
          { grid: Array(3).fill('X') }
        ],
        currentStep: 0
      });

      expect(wrapper.instance().getWinner()).toBe('X');
    });

    it('Should return O when second player has fullfill firt column', () => {
      wrapper.setState({
        history: [
          {
            grid: [
              'O', null, null,
              'O', null, null,
              'O', null, null
            ]
          }
        ],
        currentStep: 0
      });

      expect(wrapper.instance().getWinner()).toBe('O');
    });

    it('Should return X when first player has fullfill diagonal', () => {
      wrapper.setState({
        history: [
          {
            grid: [
              'O', null, 'X',
              'O', 'X', null,
              'X', null, 'O'
            ]
          }
        ],
        currentStep: 0
      });

      expect(wrapper.instance().getWinner()).toBe('X');
    });
  });
});
