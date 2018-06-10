import * as React from 'react';
import { render } from 'react-dom';
import { ListPost, reducer as listPost } from '../src';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const store = createStore(combineReducers({
    listPost
}));

render(
    <Provider store={store}>
        <ListPost />
    </Provider>,
    document.getElementById('app'));