// import {  createStore ,applyMiddleware} from '@reduxjs/toolkit'
import { createStore,applyMiddleware } from 'redux'
import reducers from './reducers'
import { thunk } from 'redux-thunk'



export const store=createStore(reducers,{},applyMiddleware(thunk))

// export const store = configureStore({
//     reducer: reducers,
//     middleware: () => new Tuple(thunk),
// })

// const middleware=[thunk]
// export const store=configureStore(reducers,{},middleware)