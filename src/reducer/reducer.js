import types from '../types';

const initialState = {
  tickets: new Map(),
  searchValue: '',
  showTicketModule: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NEW_TICKET:
    case types.UPDATE_TICKET:
      return {
        ...state,
        tickets: state.tickets.set(action.payload.id, action.payload.ticket),
      };
    case types.SEARCH_CHANGE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case types.SHOW_TICKET_MODULE:
      return {
        ...state,
        showTicketModule: action.payload,
      };
    case types.HIDE_TICKET_MODULE:
      return {
        ...state,
        showTicketModule: null,
      };
    default:
      return state;
  }
};

export default reducer;