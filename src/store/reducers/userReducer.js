const initState = {
  username: 'testuser',
  events: {
    uuidgoeshere: {
      eventName: 'onesie party',
      eventDescription: 'twosies are ok too'
    },
    birthday: {
      eventName: 'Ben\'s Turning Six',
      eventDescription: ''
    },
    cupcakes: {
      eventName: 'Yoshi\'s Cupcake Party',
      eventDescription: ''
    },
    halloween: {
      eventName: 'Spooktacular Halloween Party',
      eventDescription: ''
    },
    happyhour: {
      eventName: 'Codefellows Happy Hour',
      eventDescription: ''
    },
    thanksgiving: {
      eventName: 'Thanksgiving at Gram\'s',
      eventDescription: ''
    },
    funeral: {
      eventName: 'My life during CF',
      eventDescription: ''
    },
    wedding: {
      eventName: 'Keller Wedding',
      eventDescription: ''
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
