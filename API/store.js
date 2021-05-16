//create store in ES6
import { createStore } from 'redux'
//create store in ES5
var createStore = require('redux').createStore

//**************************************************
    
createStore(reducer, [preloadedState], [enhancer])

/* 1.reducer (Function): A reducing function that returns the next state tree, given the current state tree and an action to handle.
   2.[preloadedState] (any): The initial state. You may optionally specify it to hydrate the state from the server in universal apps, 
   or to restore a previously serialized user session. If you produced reducer with combineReducers, this must be a plain object with 
   the same shape as the keys passed to it. Otherwise, you are free to pass anything that your reducer can understand.
   3.[enhancer] (Function): The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as
   middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is applyMiddleware().*/
