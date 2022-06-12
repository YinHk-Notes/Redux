### redux Store
The Redux store brings together the state, actions, and reducers that make up your app. The store has several responsibilities:

- Holds the current application state inside
- Allows access to the current state via `store.getState()`;
- Allows state to be updated via `store.dispatch(action)`;
- Registers listener callbacks via `store.subscribe(listener)`;
- Handles unregistering of listeners via the unsubscribe function returned by `store.subscribe(listener)`.


```js
//src/store.js
import { createStore } from 'redux'
import rootReducer from './reducer'

const store = createStore(rootReducer)

export default store
```

```js
import { createStore } from 'redux'
import rootReducer from './reducer'

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}

const store = createStore(rootReducer, preloadedState)
```


