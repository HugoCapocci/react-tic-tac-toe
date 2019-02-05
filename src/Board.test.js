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

    describe('getWinner', () => {
        it('Should return false at startup', () => {
            expect(wrapper.instance.getWinner()).toBe(null);
        });

        it('Should return true is a player win', () => {
            expect(wrapper.instance.getWinner()).toBe(true);
        });
    });

});