import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './actions'
import { decrement } from './actions'
import { addText } from './actions'

function App() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const text = useSelector(state => state.text )

  return (
    <div className='App'>
      <h1>Counter</h1>
        <div>
          <span className='count'> {counter} </span><br/>
          <button onClick={ () => dispatch(decrement()) }>-</button>
          <button onClick={ () => dispatch(increment()) }>+</button>
        </div>
      <h1>Words!</h1>
      <span>{text}</span>
      <br />
      <input onChange={ () => dispatch(addText()) }></input>
      
      <button>Submit</button>
        <div>
          <ul>
            <li>

            </li>
          </ul>
        </div>
    </div>
  );
}

export default App;
