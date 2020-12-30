import React, { useState } from 'react'

export default function TodoForm() {
    const [todo, setTodo] = useState('')  
    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={event => setTodo(event.target.value)}
            />
        </form>
    )
}