import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    return (
      <p key={this.props.key}>{this.props.card.content }</p>
    );
  }
}
Card.propTypes = {
  card: PropTypes.object,
  key: PropTypes.number,
};

export default Card;
