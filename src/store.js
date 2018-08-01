import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { _rootReducer } from './reducers/_rootReducer';

export const store = createStore (
    _rootReducer,
    {},
    applyMiddleware(ReduxThunk)
);