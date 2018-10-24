import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  category: '',
  amount: 0,
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.section || emptyState;
  }
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({[name]: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  };

  render() {
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='category'
          placeholder='expense name'
          value={this.state.category || ''}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name="amount"
          placeholder='expense amount'
          value={this.state.amount || ''}
          onChange={this.handleChange}
        />
        <button type='submit'>Create Expense</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  section: PropTypes.object,
  onComplete: PropTypes.func,
};

export default CategoryForm;
