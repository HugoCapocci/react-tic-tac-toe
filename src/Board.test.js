import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
import { wrap } from 'module';

describe('Board tests', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Board />);
    });


    describe('isEnd', () => {
        it('Should return false at startup', () => {
            expect(wrapper.instance().isEnd()).toBe(false);
        });

        it('Should return true if board is full', () => {
            const array = Array(9).fill('X');
            wrapper.instance().setState({cells : array});
            expect(wrapper.instance().isEnd()).toBe(true);
        });
    });

    describe('calculateWinner', () => {
        it('Should return null at startup', () => {
            const array = Array(9).fill(null);
            expect(wrapper.instance().calculateWinner(array)).toBe(null);
        });

        it('Should return X or O is a player win', () => {
            const array = ['X', 'X', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
            expect(wrapper.instance().calculateWinner(array)).toBe('X');
        });
    });

});
