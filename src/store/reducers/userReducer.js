const initState = {
  username: '',

}

const userReducer = (state = initState, action) => {
  switch(action.type) {
    case 'SIGN_UP_SUCCESS':
      return { ...state, username: action.payload };
    default:
      return state;
  }
}

export default userReducer;