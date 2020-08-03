import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const BooksSearchView = ({handleSubmit, search}) => {
  return (
    <div>
      <Form inline onSubmit={handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="text" name="search" id="search" defaultValue={search} />
        </FormGroup>
        <Button>Search</Button>
      </Form>
    </div>
  );
}

BooksSearchView.propTypes = {
  search: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

export default BooksSearchView;