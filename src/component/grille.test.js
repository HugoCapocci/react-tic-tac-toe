import React from 'react';
import { shallow } from 'enzyme';
import Grille from './grille.js';

describe('BoardGrid tests', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Grille />);
    });

    describe('isBoardFull', () => {
        it('Should return false at startup', () => {
            expect(wrapper.instance().isBoardFull()).toBe(false);
        });

        it('Should return true if board is full', () => {
            wrapper.setState({ grid: Array(9).fill('Y') });

            expect(wrapper.instance().isBoardFull()).toBe(true);
        });
    });

    describe('getWinner', () => {
        it('Should return null at startup', () => {
            expect(wrapper.instance().getWinner()).toBe(null);
        });

        it('Should return X when first player has fullfill firt row', () => {
            wrapper.setState({
                grid: Array(3).fill('X')
            });

            expect(wrapper.instance().getWinner()).toBe('X');
        });

        it('Should return O when second player has fullfill firt column', () => {
            wrapper.setState({
                grid: [
                    'O', null, null,
                    'O', null, null,
                    'O', null, null
                ]
            });

            expect(wrapper.instance().getWinner()).toBe('O');
        });

        it('Should return X when first player has fullfill diagonal', () => {
            wrapper.setState({
                grid: [
                    'O', null, 'X',
                    'O', 'X', null,
                    'X', null, 'O'
                ]
            });

            expect(wrapper.instance().getWinner()).toBe('X');
        });
    });
});