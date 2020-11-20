import {combineReducers,createStore, applyMiddleware} from 'redux'
import LotReducer from './reducer/lotReducer'
import PageReducer from './reducer/pageReducer'
import SearchReducer from './reducer/searchReducer'
import MessageReducer from './reducer/messageReducer'
import thunkMiddleware  from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import AuthReducer from './reducer/authReducer'
import AppReducer from './reducer/appReducer'
import AukReducer from './reducer/aukReducer'

let reducer = combineReducers({
    lot:LotReducer,
    page:PageReducer,
    search:SearchReducer,
    message:MessageReducer,
    auth:AuthReducer,
    initData:AppReducer,
    auk:AukReducer,
    form:formReducer,
})

let store = createStore(reducer,applyMiddleware(thunkMiddleware));
window.store=store
export default store