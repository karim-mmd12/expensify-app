import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/Expenses-Summary';

test('should render expenses summary component correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={32.45} />);
    expect(wrapper).toMatchSnapshot();
});
test('should render expenses summary component correctly with many expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={104774552.45} />);
    expect(wrapper).toMatchSnapshot();
});