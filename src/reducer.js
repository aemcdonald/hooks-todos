function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      const toggledTodos = state.todos.map(todo =>
        todo.id === action.payload.id
          ? { ...action.payload, coplete: !action.payload.complete }
          : todo
      );
      return {
        ...state,
        todos: toggledTodos
      };
    default:
      return state;
  }
}

export default reducer;
