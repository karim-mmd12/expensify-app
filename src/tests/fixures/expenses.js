import moment from 'moment';

export default [
    {
        createdAt: moment(0).valueOf(),
        description: 'Rent',
        amount: 4500,
        id: "84c57dae-13af-465a-bbfe-3f4ab8e9a579",
        note: ''
    },
    {
        createdAt: moment(0).subtract(2, 'days').valueOf(),
        description: 'laudary',
        amount: 4300,
        id: "84c57dae-13af-465a-bbfe-3f4ab8e9a571",
        note: ''
    },
    {
        createdAt: moment(0).add(1, 'day').valueOf(),
        description: 'car',
        amount: 1000,
        id: "84c57dae-13af-465a-bbfe-3f4ab8e9a572",
        note: ''
    },
];