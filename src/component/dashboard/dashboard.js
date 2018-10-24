import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category-actions';
import CategoryForm from '../section-form/category-form';
import UpdateExpense from '../update-expense/update-expense'
import RemoveExpense from '../remove-expense/remove-expense'
import CardForm from "../card-form/card-form";

class Dashboard extends React.Component {
  render() {
    console.log(this.props.category);
    return (
      <div>
        <CategoryForm onComplete={this.props.categoryCreate}/>
        <div> { this.props.category.map(currentCategory => <section
          key={currentCategory.id}
          className="expense-list">
          <p>Expense Name: {currentCategory.category}</p>
          <p>Amount: ${currentCategory.amount}</p>
          <UpdateExpense section={currentCategory} onComplete={this.props.categoryUpdate}/>
          <RemoveExpense section={currentCategory} onComplete={this.props.categoryRemove}/>
          <CardForm section={this.props.section} onComplete={this.props.cardCreate}/>
        </section>)}
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  cardCreate: PropTypes.func,
  categoryCreate: PropTypes.func,
  categoryUpdate: PropTypes.func,
  categoryRemove: PropTypes.func,
  category: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    category: state.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (category) => {
      dispatch(categoryActions.create(category));
    },
    categoryUpdate: (category) => {
      dispatch(categoryActions.update(category));
    },
    categoryRemove: (category) => {
      dispatch(categoryActions.remove(category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
