import {createStore} from 'redux';

// Define the state of your application first.
const state = {};

// Step -1 Create the reducer.
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
  
  //Step-2 create the store. 
  //Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
  let store = createStore(counter)

  // This is to initiate the sample transaction with the redux store.
  renderValue();

  //Sample increment and decrement with the store.
  function renderValue(){
    console.log('Inside render value');
    store.dispatch({ type: 'INCREMENT' })
    // 1
    store.dispatch({ type: 'INCREMENT' })
    // 2
    store.dispatch({ type: 'DECREMENT' })
    // 1
  }
  
  // Step-3 Subscribe to see what runs inside.
  // Subscribed just to see what update is happening in it.
  store.subscribe(() =>
    console.log(store.getState()," Subscribed result")
  )
  
export default store;