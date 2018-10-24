import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  category: '',
};

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.card || emptyState;
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ category: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const sectionId = this.props.section ? this.props.section.id : this.props.card.sectionId;
    this.props.onComplete({
      ...this.state,
      sectionId,
    });
    this.setState(emptyState);
  };

  render() {
    const { card } = this.props;
    const buttonText = card ? 'Update Card' : 'Create Card';

    return (
      <form className="card-form"
            onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="content"
          placeholder="card name"
          value={this.state.category}
          onChange={this.handleChange}
        />
        <button type="submit"> {buttonText} </button>
      </form>
    );
  }
}

CardForm.propTypes = {
  onComplete: PropTypes.func,
  section: PropTypes.object,
  card: PropTypes.object,
};

export default CardForm;

