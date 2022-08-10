### Actions
Actions are ***plain JavaScript objects that have a type field***.
We normally put any extra data needed to describe what's happening for this action, into the ***`action.payload` field***
actions will be dispatched to the reducer if state change
  
  
eg:
```js
{type: 'todos/todoAdded', payload: todoText}  //type & playload
```

Custom actions example:
```js
export const action = ({params={},callback}) => {
    return {
      type: actionType,
      params,
      callback
    };
};
```

```js
dispatch(action)
dispatch({type: ..., payload: ...})
```
  
  
