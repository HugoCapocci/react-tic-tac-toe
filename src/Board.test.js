import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
import { wrap } from 'module';

describe('Board tests', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Board />);
    });


    describe('isBoardFull', () => {
        it('Should return false at startup', () => {
            expect(wrapper.instance().isBoardFull()).toBe(false);
        });

        it('Should return true if board is full', () => {
            expect(wrapper.instance().isBoardFull()).toBe(true);
        });
    });

    describe('calculateWinner', () => {
        it('Should return false at startup', () => {
            const array = Array(9).fill(null);
            expect(wrapper.instance.calculateWinner(array)).toBe(null);
        });

        it('Should return true is a player win', () => {
            const array = ['X', 'X', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
            expect(wrapper.instance.calculateWinner(array)).toBe(true);
        });
    });

});
