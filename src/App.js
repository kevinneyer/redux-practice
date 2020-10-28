import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './actions'
import { decrement } from './actions'
import { addText } from './actions'

function App() {
  // const [things, setThings] = useState([])

  const counter = useSelector( state => state.counter )
  const text = useSelector( state => state.text )
  // const things = useSelector( state => state.things)
  const dispatch = useDispatch()
  
  // const submitText = (e) => {
  //   e.preventDefault();
  //   setThings(...things, text)
  // }

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
      <form>
        <input placeholder='add text here...' value={text} onChange={ (e) => dispatch( {type: 'ADD_TEXT', payload: e.target.value }) } ></input>
        <button>Submit</button>
      </form>
        <div>
          
        </div>
    </div>
  );
}

export default App;
