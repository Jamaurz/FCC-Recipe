import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import {reducer as modalReducer} from 'react-redux-modal'

import common from "./commonReducer"

export default combineReducers({
    modals: modalReducer,
    routing: routerReducer,
    common
})
