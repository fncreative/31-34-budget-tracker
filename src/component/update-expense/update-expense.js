import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  category: '',
  amount: 0,
};

class UpdateExpense extends React.Component {
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
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>

        <input
          type='text'
          name="category"
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
        <br />
        <button type='submit'>Update</button>
      </form>
    );
  }
}

UpdateExpense.propTypes = {
  section: PropTypes.object,
  onComplete : PropTypes.func,
};

export default UpdateExpense;
