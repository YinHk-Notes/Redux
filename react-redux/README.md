### Provider

```js
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
```

### Combining reducers
```js
const reducer = combineReducers({
  counter, user, store
})
//Combines multiple reducers into one reducer function.
```

### Mapping state & mapping dispatch (use both in class and function component)
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
```
```js
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

```js
const mapDispatchToProps = {
  //... dispatch action
};

connect(null, mapDispatchToProps)(App)  //if mapStateToProps is not specified
```

```js
// TodoList.js

function mapStateToProps(state) {
  // get yje state form the store
}

export default connect(mapStateToProps)(App)
```


