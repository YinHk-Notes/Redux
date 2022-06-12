### Reducer

Reducers are functions that take the current state and an action as arguments, and return a new state result. 
In other words, ```(state, action) => newState```.


```js
const INITIAL_STATE = {
  //... all initial states
  STATE_A: ...,
  STATE_B: ...,
  ...
}

export default (state = INITIAL_STATE, action = {}) => {
   switch (action.type) {
   
       case 'A': {
          return {  // Handle update state
              ...state,
              STATE_A: action.payload
          };
       }
       
       case 'B': {
          return {  // Handle update state
              ...state,
              STATE_B: action.payload
           };
       }
       default: {
            return state;
       }
         
   }

}

```
