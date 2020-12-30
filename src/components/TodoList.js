import React, { useContext } from 'react';
import TodosContext from '../context';
import './todoList.css';

export const TodoList = () => {
  const { state, dispatch } = useContext(TodosContext);

  return (
    <div>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span className={todo.complete ? 'crossout': 'incomplete'}>
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo })}
            >
              Complete
            </button>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
