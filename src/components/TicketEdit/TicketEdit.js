import React, { useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'node-uuid';
import actions from '../../actions';
import { ReactComponent as X } from '../../assets/images/clear-x.svg';

const TicketEdit = ({ticket, fields, hide, save}) => {
  const [summary, setSummary] = useState(ticket ? ticket.summary : fields.summary);
  const [description, setDescription] = useState(ticket ? ticket.description : fields.description);
  const [status, setStatus] = useState(ticket ? ticket.status : fields.status[0]);
  const [severity, setSeverity] = useState(ticket ? ticket.severity : fields.severity[0]);
  const [error, setError] = useState('');
  return (
  <div className='ticket-edit'>
    <X
      width={15}
      height={15}
      onClick={() => {
        hide();
      }}
    /> 
    Edit Ticket
    <div>{ticket ? `ID: ${ticket.id}`: 'New Ticket'}</div>
    <input
      type='text'
      name='summary'
      placeholder='Enter ticket summary'
      value={summary} onChange={e => {
        setError('');
        setSummary(e.target.value);
      }}
    />
    <input
      type='text'
      name='description'
      placeholder='Enter ticket Description'
      value={description}
      onChange={e => {
        setError('');
        setDescription(e.target.value);
      }}
    />
    <select
      name='status'
      value={status}
      onChange={e => setStatus(e.target.value)}
    >
      {fields.status.map(statusValue => <option value={statusValue}>{statusValue}</option>)}
    </select>
    <select
      name='severity'
      value={severity}
      onChange={e => setSeverity(e.target.value)}
    >
      {fields.severity.map(severityValue => <option value={severityValue}>{severityValue}</option>)}
    </select>
    <button
      className='save-button'
      onClick={() =>{
        if (summary.length > 0 && description.length > 0) {
          const newTicket = {
            updated: new Date().valueOf(),
            summary,
            description,
            status,
            severity,
          }
          if (ticket) {
            save(ticket.id, {
              ...ticket,
              ...newTicket,
            })
          } else {
            const id = uuid.v4();
            save(id, {
              ...newTicket,
              id,
              created: newTicket.updated,
            })
          }
        } else {
          setError('Please enter ticket summary and description.')
        }
      }}
    >Save</button>
    <div className='error'>{error}</div>
  </div>
)};

const mapStateToProps = state => ({
  fields: state.ticketFields,
})

const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(actions.ticketModuleHideClick()),
  save: (id, ticket) => dispatch(actions.ticketUpeate(id, ticket)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketEdit);