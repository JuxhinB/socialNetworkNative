import { createStore } from 'redux';
import { _rootReducer } from './reducers/_rootReducer';

export const store = createStore (_rootReducer);