const defaultState = {
  list: [],
  total: 0,
};

function booksReducer(state = defaultState, action) {
  switch (action.type) {
  case 'RECEIVE_BOOKS':
    return {
      ...state,
      list: action.data.books,
      total: parseInt(action.data.count),
    };
  default:
    return state;
  }
}

export default booksReducer;
