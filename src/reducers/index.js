import { combineReducers } from 'redux'
import userReducer from './userReducer'
import dataReducer from './dataReducer'

import { Home } from '../components/home'
import { Menu } from '../components/menu'

const rootReducer = combineReducers({
    user: userReducer,
    data: dataReducer,
    menu: (state, action) => Menu.router.getStateForAction(action, state) || state,
    home: (state, action) => Home.router.getStateForAction(action, state),
})

export default rootReducer;
