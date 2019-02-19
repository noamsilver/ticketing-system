import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

const NewTicketButton = ({ onClick }) => (
  <button
    className='new-ticket-button'
    onClick={onClick}
  >New Ticket</button>
);

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(actions.newTicketClick()),
})

export default connect(
  null,
  mapDispatchToProps
)(NewTicketButton);