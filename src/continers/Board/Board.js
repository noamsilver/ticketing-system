import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import TicketModule from '../TicketModule';
import Ticket from '../../components/Ticket';

const Board = ({tickets, ticketModuleShow, search, ticketUpdate}) => {
  let ticketsArray = Array.from(tickets.values());
  if (search !== '') {
    console.log({search, ticketsArray, ticket: ticketsArray[0]})
    ticketsArray = ticketsArray.filter(ticket => 
      ticket.summary.includes(search) || ticket.description.includes(search)
    );
  }
  return (
    <div id='board'>
      {ticketModuleShow && <TicketModule />}
      <div id='title'>Tickets Board</div>
      <div id='boards'>
        <div
          id='open-board'
          key='open-board'
          className='board-box'
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDrop={e => handleDrop(e, 'Open', ticketUpdate)}
        >
          <div className='title'>Open</div>
          {ticketsArray.filter(ticket => ticket.status === 'Open')
            .map(ticket => <Ticket ticket={ticket} />)}
        </div>
        <div
          id='in-progress-board'
          key='in-progress-board'
          className='board-box'
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDrop={e => handleDrop(e, 'In Progress', ticketUpdate)}
        >
          <div className='title'>In Progress</div>
          {ticketsArray.filter(ticket => ticket.status === 'In Progress')
            .map(ticket => <Ticket ticket={ticket} />)}
        </div>
        <div
          id='done-board'
          key='done-board'
          className='board-box'
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDrop={e => handleDrop(e, 'Done', ticketUpdate)}
        >
          <div className='title'>Done</div>
          {ticketsArray.filter(ticket => ticket.status === 'Done')
            .map(ticket => <Ticket ticket={ticket} />)
            .reverse()}
        </div>
      </div>
    </div>
  )
};

const handleDragEnter = e => {
  console.log('onDragEnter');
  e.preventDefault();
}

const handleDragOver = e => {
  console.log('onDragOver');
  e.preventDefault();
}

const handleDrop = (e, status, ticketUpdate) => {
  console.log('onDrop');
  e.preventDefault();
  const ticket = JSON.parse(e.dataTransfer.getData('application/json'));
  console.log({ticket})
  ticketUpdate({
    ...ticket,
    status,
  });
}

const mapStateToProps = state => ({
  tickets: state.tickets,
  ticketModuleShow: state.ticketModuleShow || state.ticketEdit,
  search: state.searchValue,
  toggleRerender: state.toggleRerender, // not used - is a hack to make the boards rerender after a drag&drop operation
});

const mapDispatchToProps = dispatch => ({
  ticketUpdate: ticket => dispatch(actions.ticketUpeate(ticket))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);