import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './actions'
import { decrement } from './actions'

function App() {

  const counter = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <h1>Counter</h1>
        <div>
          <span className='count'> {counter} </span><br/>
          <button onClick={ () => dispatch(decrement()) }>-</button>
          <button onClick={ () => dispatch(increment()) }>+</button>
        </div>
    </div>
  );
}

export default App;
