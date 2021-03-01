import { createStore } from 'redux';

/**
 * Action generators - functions that return action objects
 * **/


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {

        case 'INCREMENT':
            state = {
                count: state.count + action.incrementBy
            };
            break;

        case 'DECREMENT':
            state = {
                count: state.count - action.decrementBy
            };
            break;

        case 'RESET':
            state = {
                count: 0
            };
            break;
        case 'SET':
            state = {
                count: action.count
            };
            break;

        default:
            break;
    }
    return state;

});

const logState = () => {
    console.log(`the state count is : 
`, store.getState());
};
const unsubscribe = store.subscribe(logState);//subscribe to state change

//increment by 5
store.dispatch(incrementCount({
    incrementBy: 5
}));

//increment by 1
store.dispatch(incrementCount());

//reset action
store.dispatch(resetCount());

//decrement by 5
store.dispatch(decrementCount({ decrementBy: 5 }));

//decrement by 1
store.dispatch(decrementCount());

//setting the count to some number
store.dispatch(setCount({ count: -100 }));
