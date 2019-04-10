import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import books from './components/books/reducers';

export default (history) => combineReducers({
  books,
  router: connectRouter(history),
});
