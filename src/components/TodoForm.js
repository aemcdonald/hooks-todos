import React, { useState, useContext } from 'react'
import TodosContext from '../context'

export default function TodoForm() {
    const [todo, setTodo] = useState('')  

    const handleSubmit = event => {
        event.preventDefault()
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