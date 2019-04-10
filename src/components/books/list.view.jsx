import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

const renderBookRow = (book, key) => (
  <tr key={key}>
    <td>{book.id}</td>
    <td>{book.book_title}</td>
    <td>{book.book_author}</td>
    <td>{book.book_publication_country}</td>
  </tr>
)

const BooksListView = ({books}) => {
  return (
    <div>
      {books.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Author</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {books.map(renderBookRow)}
          </tbody>
        </Table>
      )}
      {books.length === 0 && (
        <div>No Books Found</div>
      )}
    </div>
  );
}

BooksListView.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

export default BooksListView;
