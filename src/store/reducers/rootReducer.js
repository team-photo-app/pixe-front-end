import { combineReducers } from 'redux'
import userReducer from './userReducer'
import galleryReducer from './galleryReducer'

const rootReducer = combineReducers({
  userReducer,
  galleryReducer
})

export default rootReducer
