import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { ReactComponent as X } from '../../assets/images/clear-x.svg';
import { ReactComponent as Edit } from '../../assets/images/pencil-edit-button.svg';

const Ticket = ({ticket, isModule, show, edit, hide}) => (
  <div
    className='ticket'
    onClick={() => {
      if (!isModule) {
        show(ticket.id);
      }
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