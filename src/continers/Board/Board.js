import React from 'react';
import { connect } from 'react-redux';
import TicketModule from '../TicketModule';
import Ticket from '../../components/Ticket';

const Board = ({tickets, ticketModuleShow, search}) => {
  tickets = Array.from(tickets.values());
  if (search !== '') {
    console.log({search, tickets, ticket: tickets[0]})
    tickets = tickets.filter(ticket => 
      ticket.summary.includes(search) || ticket.description.includes(search)
    );
  }
  return (
    <div id='board'>
      {ticketModuleShow && <TicketModule />}
      <div id='title'>Tickets Board</div>
      <div id='boards'>
        <div id='open-board' className='board-box'>
          <div className='title'>Open</div>
          {tickets.filter(ticket => ticket.status === 'Open')
            .map(ticket => <Ticket ticket={ticket} />)}
        </div>
        <div id='in-progress-board' className='board-box'>
        <div className='title'>In Progress</div>
          {tickets.filter(ticket => ticket.status === 'In Progress')
            .map(ticket => <Ticket ticket={ticket} />)}
        </div>
        <div id='done-board' className='board-box'>
        <div className='title'>Done</div>
          {tickets.filter(ticket => ticket.status === 'Done')
            .map(ticket => <Ticket ticket={ticket} />)
            .reverse()}
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  tickets: state.tickets,
  ticketModuleShow: state.ticketModuleShow || state.ticketEdit,
  search: state.searchValue,
});

export default connect(mapStateToProps)(Board);