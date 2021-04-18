## Creating a store
A store is made from a reducer function, which takes the current state, and returns a new state depending on the action it was given.

```js
import { createStore } from 'redux'

// Reducer
function counter (state = { value: 0 }, action) {
  switch (action.type) {
  case 'INCREMENT':
    return { value: state.value + 1 }
  case 'DECREMENT':
    return { value: state.value - 1 }
  default:
    return state
  }
}

let store = createStore(counter)

// Optional - you can pass `initialState` as a second arg
let store = createStore(counter, { value: 0 })
```

## Using store
Dispatch actions to change the store’s state.
```js
let store = createStore(counter)

// Dispatches an action; this changes the state
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })

// Gets the current state
store.getState()

// Listens for changes
store.subscribe(() => { ... })
```

## Provider
The <Provider> component makes the store available in your React components. You need this so you can use connect().
  
```js
import { Provider } from 'react-redux'

React.render(
  <Provider store={store}>
    <App />
  </Provider>, mountNode)
```

## Shorthand
Same as above, but shorter.
```js
export default connect(
  (state) => ({
    message: state.message
  }),
  (dispatch) => ({
    onMessageClick: (message) => {
      dispatch({ type: 'click', message })
    }
  })
)(App)
```

## Mapping state
```js
import { connect } from 'react-redux'
// A functional React component
function App ({ message, onMessageClick }) {
  return (
    <div onClick={() => onMessageClick('hello')}>
      {message}
    </div>
  )
}
// Maps `state` to `props`:
// These will be added as props to the component.
function mapState (state) {
  return { message: state.message }
}

// Maps `dispatch` to `props`:
function mapDispatch (dispatch) {
  return {
    onMessageClick (message) {
      dispatch({ type: 'click', message })
    }
  }
}

// Connect them:
export default connect(mapState, mapDispatch)(App)
```

## Combining reducers
Combines multiple reducers into one reducer function. 
```js
const reducer = combineReducers({
  counter, user, store
})
```

## Signature
Middlewares are simply decorators for dispatch() to allow you to take different kinds of actions, and to perform different tasks when receiving actions.
```js
// noop middleware
const logger = store => dispatch => action { dispatch(action) }
const logger = store => {
  // This function runs on createStore().
  // It returns a decorator for dispatch().

  return dispatch => {
    // Runs on createStore(), too.
    // It returns a new dispatch() function

    return action => {
      // Runs on every dispatch()
    }
  }
}

```

## Applying middleware
```js

const enhancer = applyMiddleware(logger, thunk, ...)
const store = createStore(reducer, {}, enhancer)

```


## redux summary
```js
import { createStore } from 'redux'

/**
 * 這是一個 reducer，一個有 (state, action) => state signature 的 pure function。
 * 它描述一個 action 如何把 state 轉換成下一個 state。
 *
 * state 的形狀取決於你：它可以是基本類型、一個陣列、一個物件，
 * 或甚至是一個 Immutable.js 資料結構。唯一重要的部分是你
 * 不應該改變 state 物件，而是當 state 變化時回傳一個新的物件。
 *
 * 在這個範例中，我們使用一個 `switch` 陳述句和字串，不過你可以使用一個 helper，
 * 來遵照一個不同的慣例 (例如 function maps)，如果它對你的專案有意義。
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// 建立一個 Redux store 來掌管你的應用程式的 state。
// 它的 API 是 { subscribe, dispatch, getState }。
let store = createStore(counter)

// 你可以手動的去訂閱更新，或是使用跟你的 view layer 之間的綁定。
// 通常你會使用一個 view 綁定 library（例如：React Redux），而不是直接 subscribe()。
// 然而也可以很方便的將目前狀態儲存在 localStorage。
store.subscribe(() =>
  console.log(store.getState())
)

// 變更內部 state 的唯一方法是 dispatch 一個 action。
// actions 可以被 serialized、logged 或是儲存並在之後重播。
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
```











