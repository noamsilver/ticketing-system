import React, { useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'short-uuid';
import actions from '../../actions';
import { ReactComponent as X } from '../../assets/images/clear-x.svg';

const short = uuid();

const TicketEdit = ({ticket, fields, hide, save}) => {
  const [summary, setSummary] = useState(ticket ? ticket.summary : fields.summary);
  const [description, setDescription] = useState(ticket ? ticket.description : fields.description);
  const [status, setStatus] = useState(ticket ? ticket.status : fields.status[0]);
  const [severity, setSeverity] = useState(ticket ? ticket.severity : fields.severity[0]);
  const [error, setError] = useState('');
  return (
  <div id='ticket-edit'>
    <div className='icons'>
      <X
        width={15}
        height={15}
        onClick={() => {
          hide();
        }}
      /> 
    </div>
    {ticket ? <div className='ticket-title'>{'Edit Ticket'}</div> : ''}
    {ticket ? <div className='id'>{`ID: ${ticket.id}`}</div>: <div className='ticket-title'>{'New Ticket'}</div>}
    <div className='inputs'>
      <div className='summary'>
        <input
          type='text'
          name='summary'
          placeholder='Enter summary'
          value={summary} onChange={e => {
            setError('');
            setSummary(e.target.value);
          }}
        />
      </div>
      <div className='description'>
        <input
          type='text'
          name='description'
          placeholder='Enter description'
          value={description}
          onChange={e => {
            setError('');
            setDescription(e.target.value);
          }}
        />
      </div>
      <div className='status'>
        <label>Status: </label>
        <select
          name='status'
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          {fields.status.map(statusValue => <option value={statusValue}>{statusValue}</option>)}
        </select>
      </div>
      <div className='severity'>
        <label>Severity: </label>
        <select
          name='severity'
          value={severity}
          onChange={e => setSeverity(e.target.value)}
        >
          {fields.severity.map(severityValue => <option value={severityValue}>{severityValue}</option>)}
        </select>
      </div>
    </div>
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
            const id = short.new();
            save(id, {
              ...newTicket,
              id,
              created: newTicket.updated,
            })
          }
        } else {
          setError('Please enter both a ticket summary and a description.')
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