import moment from 'moment';

/* Get visible expenses filtered by date and text */
export default (expenses, { text, sortBy, startDate, endDate }) => {
    console.log('expenses', expenses);
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? createdAtMoment.isSameOrAfter(startDate, 'day') : true;
        const endDateMatch = endDate ? createdAtMoment.isSameOrBefore(endDate, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        /* console.log(`
        ${startDateMatch}
        ${startDateMatch}
        ${startDateMatch}`); */
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return moment(a.createdAt).isBefore(moment(b.createdAt), 'day') ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}