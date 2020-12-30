import React, { useState, useContext, useEffect } from 'react'
import TodosContext from '../context'

export default function TodoForm() {
    const [todo, setTodo] = useState('')  

    const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext)

    useEffect(() => {
        if(currentTodo.text) {
            setTodo(currentTodo.text)
        }
    }, [currentTodo.id])

    const handleSubmit = event => {
        event.preventDefault()
        dispatch({ type: 'ADD_TODO', payload: todo })
        setTodo('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={event => setTodo(event.target.value)}
                value={todo}
            />
        </form>
    )
}