import types from '../types';

export default {
  newTicket: (id, ticket) => ({
    type: types.NEW_TICKET,
    payload: {
      id,
      ticket,
    }
  }),
  updateTicket: (id, ticket) => ({
    type: types.UPDATE_TICKET,
    payload: {
      id,
      ticket,
    }
  }),
  searchChange: text => ({
    type: types.SEARCH_CHANGE,
    payload: text,
  }),
  showTicketModule: ticket => ({
    type: types.SHOW_TICKET_MODULE,
    payload: ticket,
  }),
  hideTicketModule: () => ({
    type: types.HIDE_TICKET_MODULE,
  }),
}