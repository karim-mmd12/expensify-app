import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixures/expenses';
import { ExpenseList } from '../../components/ExpenseList';

test('should return the list of expenses', () => {
    expect(shallow(<ExpenseList expenses={expenses} />)).toMatchSnapshot();
});

test('should return an empty list of expenses with empty message', () => {
    expect(shallow(<ExpenseList expenses={[]} />)).toMatchSnapshot();
});