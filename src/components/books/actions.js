import services from './services';

export const receiveBooks = data => ({
  type: 'RECEIVE_BOOKS',
  data,
});

export const fetchBooks = (page, limit, search) => (dispatch) => {
  return services.getBooks(parseInt(page), parseInt(limit), search)
    .then(data => dispatch(receiveBooks(data.data)));
};
