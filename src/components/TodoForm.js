import React, { useState, useContext } from 'react'
import TodosContext from '../context'

export default function TodoForm() {
    const [todo, setTodo] = useState('')  

    const { state, dispatch } = useContext(TodosContext)

    const handleSubmit = event => {
        event.preventDefault()
        dispatch({ type: 'ADD_TODO', payload: todo })
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={event => setTodo(event.target.value)}
            />
        </form>
    )
}