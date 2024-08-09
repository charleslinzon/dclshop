import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './routeReducers'

const store = configureStore({

    reducer : rootReducer
    
})