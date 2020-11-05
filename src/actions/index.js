export const increment = () => {
    return { type: 'INCREMENT'}
}

export const decrement = () => {
    return { type: 'DECREMENT'}
}

export const addText = () => {
    return { type: 'ADD_TEXT' }
}

export const submit = () => {
    return { type: 'SUBMIT_TEXT' }
}

export const deleteThing = () => {
    return { type: 'DELETE_THING' }
}

export const startTimer = () => {
    return { type: 'START_TIMER' }
}

export const stopTimer = () => {
    return { type: 'STOP_TIMER' }
}