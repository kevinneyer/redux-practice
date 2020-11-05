import React, { useEffect } from 'react'
import { useState } from 'react'
import { startTimer } from './actions'
import { stopTimer } from './actions'
import { useSelector, useDispatch } from 'react-redux'


const Counter = () => {

    const timer = useSelector( state => state.timer )
    const dispatch = useDispatch()

    const [clock, setClock] = useState(0)
    const [initiated, setInitiated] = useState(false)

    const startTimes = () => {
        setInitiated(true)
        setClock(setInterval(() => { dispatch(startTimer()) }, 1000))
    }

    const stopTimes = () => {
        clearInterval(clock)
        dispatch(stopTimer())
        setInitiated(false)
    }

    return(
        <div>
            <button onClick={ startTimes }>StartTimer</button>
                <div><br />
                    { initiated === true ? 
                    <div>
                        <span>{timer}</span><br /><br />
                        <button onClick={stopTimes}>Stop Timer</button>
                    </div>
                    : 
                    null}

                </div>
        </div>
    )
}

export default Counter