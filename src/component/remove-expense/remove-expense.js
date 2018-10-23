import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  category: '',
  amount: 0,
};


class RemoveExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || emptyState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <button type='submit'>Remove Expense</button>
      </form>
    );
  }
}

RemoveExpense.propTypes = {
  category: PropTypes.object,
  onComplete : PropTypes.func,
};

export default RemoveExpense;
