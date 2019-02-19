import React from 'react';
import { connect } from 'react-redux';
import TicketModule from '../TicketModule';
import Ticket from '../../components/Ticket';

const Board = ({tickets, ticketModuleShow}) => (
  <div id='board'>
    {ticketModuleShow && <TicketModule />}
    Board
    {Array.from(tickets.values()).map(ticket => <Ticket ticket={ticket} />)}
  </div>
);

const mapStateToProps = state => ({
  tickets: state.tickets,
  ticketModuleShow: state.ticketModuleShow || state.ticketEdit,
});

export default connect(mapStateToProps)(Board);