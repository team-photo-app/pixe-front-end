export const SIGN_UP_SUCCESS = (payload) => {
  return {
    type: 'SIGN_UP_SUCCESS',
    payload: payload.username,
  }
}