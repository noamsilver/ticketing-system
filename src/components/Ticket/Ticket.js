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
    <div>{`ID: ${ticket.id}`}</div>
    <div>{ticket.summary}</div>
    {isModule && <div>{ticket.description}</div>}
    {isModule && <div>{`Status: ${ticket.status}`}</div>}
    {isModule && <div>{`Severity: ${ticket.severity}`}</div>}
    {isModule && <div>{`Created On: ${new Date(ticket.created).toLocaleString()}`}</div>}
    {isModule && <div>{`Last Updated: ${new Date(ticket.updated).toLocaleString()}`}</div>}
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