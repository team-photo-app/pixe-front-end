export const SIGN_UP_SUCCESS = (payload) => {
  return {
    type: 'SIGN_UP_SUCCESS',
    payload: payload.username
  }
}

export const EVENTS_LIST_ADD = (payload) => {
  return {
    type: 'EVENTS_LIST_ADD',
    payload: payload
  }
}
