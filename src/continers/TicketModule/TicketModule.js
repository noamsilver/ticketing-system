import React from 'react';
import { connect } from 'react-redux';
import Ticket from '../../components/Ticket';
import TicketEdit from '../../components/TicketEdit';

const TicketModule = ({ tickets, id, isEdit }) => (
  <div id='ticket-module'>
    {id && !isEdit && <Ticket ticket={tickets.get(id)} isModule={true} />}
    {id && isEdit && <TicketEdit ticket={tickets.get(id)} />}
    {!id && isEdit && <TicketEdit />}
  </div>
);

const mapStateToProps = state => ({
  tickets: state.tickets,
  id: state.ticketModuleShow,
  isEdit: state.ticketEdit,
})

export default connect(
  mapStateToProps
)(TicketModule);