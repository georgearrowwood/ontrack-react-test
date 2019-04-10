import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import qs from 'query-string';
import { Container, Row } from 'reactstrap';

import BooksListView from './list.view';
import SearchView from './search.view';
import PaginationView from './pagination.view';
import { fetchBooks } from './actions';
import { buildPagination } from './module';

class BooksList extends Component {
  constructor() {
    super();
    this.onClickSearch = this.onClickSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchBooks(this.props.page, this.props.limit, this.props.search);
  }

  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page || this.props.search !== prevProps.search) {
      this.props.fetchBooks(this.props.page, this.props.limit, this.props.search);
    }
  }

  onClickSearch(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    this.props.history.push({ pathname: '/', search: qs.stringify({ page: 1, limit: 20, search: data.get('search') }) });
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <h1>Books list</h1>
        </Row>
        <Row className="justify-content-center mb-2">
          <SearchView handleSubmit={this.onClickSearch} search={this.props.search} />
        </Row>
        <Row className="justify-content-center">
          <PaginationView pagination={this.props.pagination} />
        </Row>
        <BooksListView books={this.props.books} />
        <Row className="justify-content-center">
          <PaginationView pagination={this.props.pagination} />
        </Row>
      </Container>
    );
  }
}

BooksList.propTypes = {
  search: PropTypes.string,
  page: PropTypes.number,
  limit: PropTypes.number,
  books: PropTypes.arrayOf(PropTypes.object),
  pagination: PropTypes.shape(),
  fetchBooks: PropTypes.func,
  history: PropTypes.shape(),
};

const mapStateToProps = (state) => {
  const queryParams = qs.parse(state.router.location.search);
  const props = {
    books: state.books.list,
    total: state.books.total,
    limit: queryParams.limit ? parseInt(queryParams.limit) : 20,
    page: queryParams.page ? parseInt(queryParams.page) : 1,
    search: queryParams.search ? queryParams.search : '',
  }
  props.pagination = buildPagination(props.total, props.limit, props.page, props.search);
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: (page, limit, search) => dispatch(fetchBooks(page, limit, search)),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BooksList));