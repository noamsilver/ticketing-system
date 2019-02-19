import types from '../types';

export default {
  newTicketClick: () => ({
    type: types.NEW_TICKET_CLICK,
  }),
  ticketUpeate: (id, ticket) => ({
    type: types.TICKET_UPDATE,
    payload: {
      id,
      ticket,
    }
  }),
  searchChange: text => ({
    type: types.SEARCH_CHANGE,
    payload: text,
  }),
  ticketModuleShowClick: id => ({
    type: types.TICKET_MODULE_SHOW_CLICK,
    payload: id,
  }),
  TicketModuleEditClick: id => ({
    type: types.TICKET_MODULE_EDIT_CLICK,
    payload: id,
  }),
  ticketModuleHideClick: () => ({
    type: types.TICKET_MODULE_HIDE_CLICK,
  }),
}