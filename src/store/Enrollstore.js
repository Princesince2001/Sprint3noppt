// store.js
import { createStore, applyMiddleware } from 'redux';

import { enrollMiddleware } from '../middleware/EnrollApi';
import {EnrollmentReducer} from '../reducers/EnrollmentReducer'




export const store = createStore( applyMiddleware(enrollMiddleware));
