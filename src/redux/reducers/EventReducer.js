export const EventReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "ADD_NEW_EVENT":
      return { ...state, data: [action.data, ...state.data] };

    default:
      return state;
  }
};
