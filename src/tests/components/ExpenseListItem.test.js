import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render the ExpenseListItem component correctly', () => {
    expect(shallow(<ExpenseListItem {...expenses[0]} />)).toMatchSnapshot();
});