import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

const NewTicketButton = ({ onClick }) => (
  <div id='new-ticket-button-container'>
    <button
      className='new-ticket-button'
      onClick={onClick}
    >
      New Ticket
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(actions.newTicketClick()),
})

export default connect(
  null,
  mapDispatchToProps
)(NewTicketButton);