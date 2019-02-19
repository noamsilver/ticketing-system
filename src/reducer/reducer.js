import types from '../types';

const initialState = {
  tickets: new Map(),
  searchValue: '',
  ticketModuleShow: null,
  ticketEdit: false,
  ticketFields: {
    summary: '',
    description: '',
    status: ['Open', 'In Progress', 'Done'],
    severity: ['Low', 'Medium', 'High'],
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NEW_TICKET_CLICK:
      return {
        ...state,
        ticketModuleShow: null,
        ticketEdit: true,
      };
    case types.TICKET_UPDATE:
      return {
        ...state,
        tickets: state.tickets.set(action.payload.id, action.payload.ticket),
        ticketModuleShow: null,
        ticketEdit: false,
      };
    case types.SEARCH_CHANGE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case types.TICKET_MODULE_SHOW_CLICK:
      return {
        ...state,
        ticketModuleShow: action.payload,
        ticketEdit: false,
      };
    case types.TICKET_MODULE_EDIT_CLICK:
      return {
        ...state,
        ticketModuleShow: action.payload,
        ticketEdit: true,
      };
    case types.TICKET_MODULE_HIDE_CLICK:
      return {
        ...state,
        ticketModuleShow: null,
        ticketEdit: false,
      };
    default:
      return state;
  }
};

export default reducer;