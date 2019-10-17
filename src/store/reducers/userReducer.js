const initState = {
  username: 'testuser',
  events: {
    uuidgoeshere: {
      eventName: 'onesie party',
      eventDescription: 'twosies are ok too'
    }
  }
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGN_UP_SUCCESS':
      return { ...state, username: action.payload }
    case 'EVENTS_LIST_ADD':
      // eslint-disable-next-line no-case-declarations
      const { eventID, eventName, eventDescription } = action.payload
      // eslint-disable-next-line no-case-declarations
      const prevState = { ...state }
      prevState.events = { ...prevState.events }
      prevState.events[eventID] = { eventName, eventDescription }
      return prevState
    default:
      return state
  }
}

export default userReducer
