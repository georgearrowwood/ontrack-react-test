import request from '../../modules/request';
import config from '../../modules/config';

const booksServices = {
  getBooks(page, limit, search) {
    const params = {
      page,
      itemsPerPage: limit,
    }
    if (search) {
      params.filters = [{type: "all", values: [search]}];
    }
    
    return request({baseURL: config.booksApiUrl})
      .post('/api/books', params);
  }
}

export default booksServices;