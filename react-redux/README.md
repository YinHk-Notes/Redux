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
const mapDispatchToProps = (dispatch) => {...}
```
```js
const increment = () => ({ type: 'INCREMENT' })
const decrement = () => ({ type: 'DECREMENT' })
const reset = () => ({ type: 'RESET' })

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching actions returned by action creators
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
  }
}
```

```js
// TodoList.js

function mapStateToProps(state) {
  // get yje state form the store
  return {
    counter: state.counter  //example  or const { counter } = state
  };
}

export default connect(mapStateToProps)(App)
```


### useSelector
這個方法允許我們直接從 Redux store 中的狀態提取數據到元件中。
透過 useSelector 可以取代掉 mapStateToProps 的使用方式

```js
import React from 'react'
import { useSelector } from 'react-redux'

export const CounterComponent = () => {
  const counter = useSelector(state => state.counter)
  return <div>{counter}</div>
}
```
在使用上基本上 mapStateToProps 大致相同於 useSelector，但依然有些差異，以下擷取至文件中的段落:

- `useSelector` 可以回傳任何值，並不一定是一個物件(mapStateToProps則是必定回傳一個物件)。
- `useSelector` 會將前一個結果與當前的結果進行比較，如果不同就會強制更新元件，不然就不會更新元件。
- `useSelector` 沒有自己的 props，但可以透過 JavaScript 的閉包觀念取得元件中的 props。
- `useSelector` 預設是使用 === 嚴格等於的方式檢查(mapStateToProps 則是 ==)


### useDispatch
用來取代掉 mapStateToDispatch
```js
import React from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch();
  
  return (
    <div>
      <span>{value}</span>
      <button onClick={() => dispatch({ type: 'INCREMENTHANDLER' }  )}>
        Increment counter
      </button>
    </div>
  )

```

> 使用了 Hooks 之後，我們基本上就要跟 connect 、 mapStateToProps 與 mapStateToDispatch 說再見啦，完全用不到了
