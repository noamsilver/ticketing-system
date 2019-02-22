import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import Ticket from '../../components/Ticket';
import TicketEdit from '../../components/TicketEdit';

const TicketModule = ({ tickets, id, isEdit, hide }) => (
  <div 
    id='ticket-module'
    onClick={hide}
  >
    {id && !isEdit && <Ticket ticket={tickets.get(id)} isModule={true} />}
    {id && isEdit && <TicketEdit ticket={tickets.get(id)} />}
    {!id && isEdit && <TicketEdit />}
  </div>
);

const mapStateToProps = state => ({
  tickets: state.tickets,
  id: state.ticketModuleShow,
  isEdit: state.ticketEdit,
});

const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(actions.ticketModuleHideClick()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketModule);