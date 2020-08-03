import React from 'react';
import { Pagination, PaginationItem } from 'reactstrap';
import {  Link } from "react-router-dom";
import PropTypes from 'prop-types';

const renderPaginationItem = (page, key) => (
  <PaginationItem key={key} active={page.active}>
    <Link to={`/?page=${page.page}&limit=${page.limit}&search=${page.search}`} className="page-link">
      {page.page}
    </Link>
  </PaginationItem>
);

const BooksPaginationView = ({ pagination }) => {
  
  return (
    <Pagination aria-label="Page navigation">
      {pagination.prev && (
        <PaginationItem>
          <Link to={`/?page=${pagination.prev.page}&limit=${pagination.prev.limit}&search=${pagination.prev.search}`} className="page-link">
            <span aria-hidden="true">«</span>
          </Link>
        </PaginationItem>
      )}
      {pagination.pages.map(renderPaginationItem)}
      {pagination.next && (
        <PaginationItem>
          <Link to={`/?page=${pagination.next.page}&limit=${pagination.next.limit}&search=${pagination.next.search}`} className="page-link">
            <span aria-hidden="true">»</span>
          </Link>
        </PaginationItem>
      )}
    </Pagination>
  );
}

BooksPaginationView.propTypes = {
  pagination: PropTypes.shape(),
};

export default BooksPaginationView;