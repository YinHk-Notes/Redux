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
