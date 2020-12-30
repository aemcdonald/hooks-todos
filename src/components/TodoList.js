import React, { useContext } from 'react';
import TodosContext from '../context';

export const TodoList = () => {
    const { state, dispatch } = useContext(TodosContext)
}