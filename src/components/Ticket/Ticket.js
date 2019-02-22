import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { ReactComponent as X } from '../../assets/images/clear-x.svg';
import { ReactComponent as Edit } from '../../assets/images/pencil-edit-button.svg';

const Ticket = ({ticket, isModule, show, edit, hide}) => (
  <div
    className={'ticket' + (isModule ? ' module-ticket' : ' board-ticket')}
    onClick={() => {
      if (!isModule) {
        show(ticket.id);
      }
    }}
    draggable
    onDragStart={e => {
      if (!isModule) {
        e.dataTransfer.setData('application/json', JSON.stringify(ticket));
        e.dataTransfer.setData('text/plain', JSON.stringify(ticket));
        e.dataTransfer.effectAllowed = 'move';
        e.target.style.borderWidth = '5px';
        e.target.style.borderColor = 'rgba(255, 0, 0, 0.3)';
      } else {
        e.preventDefault();
      }
    }}
    onDragEnd={e => {
      e.target.style.borderWidth = '';
      e.target.style.borderColor = 'black';
    }}
  >
    <div className='icons'>
      {isModule && <X
        width={15}
        height={15}
        onClick={() => {
          if (isModule) {
            hide();
          }
        }}
      />} 
      {isModule && <Edit
        width={15}
        height={15}
        onClick={() => edit(ticket.id)}
      />}
    </div>
    <div className='id'>{`ID: ${ticket.id}`}</div>
    <div className='summary'>{ticket.summary}</div>
    {isModule && <div className='description'>{ticket.description}</div>}
    <div className='details'>
      {isModule && <div className='status'>{`Status: ${ticket.status}`}</div>}
      {isModule && <div className='severity'>{`Severity: ${ticket.severity}`}</div>}
      {isModule && <div className='created'>{`Created On: ${new Date(ticket.created).toLocaleString()}`}</div>}
      {isModule && <div className='updated'>{`Last Updated: ${new Date(ticket.updated).toLocaleString()}`}</div>}
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  show: id => dispatch(actions.ticketModuleShowClick(id)),
  edit: id => dispatch(actions.TicketModuleEditClick(id)),
  hide: () => dispatch(actions.ticketModuleHideClick()),
});

export default connect(
  null,
  mapDispatchToProps
)(Ticket);