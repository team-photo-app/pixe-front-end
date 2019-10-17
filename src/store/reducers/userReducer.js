const initState = {
  username: 'testuser',
  events: {
    uuidgoeshere: {
      eventName: 'onesie party',
      eventDescription: 'twosies are ok too',
    },
  }
}

const userReducer = (state = initState, action) => {
  switch(action.type) {
    case 'SIGN_UP_SUCCESS':
      return { ...state, username: action.payload };
    case 'EVENTS_LIST_ADD':
      const { eventID, eventName, eventDescription } = action.payload;
      const prevState = {...state};
      prevState.events = { ...prevState.events };
      prevState.events[eventID] = { eventName, eventDescription };
      return prevState;
    default:
      return state;
  }
}

export default userReducer;