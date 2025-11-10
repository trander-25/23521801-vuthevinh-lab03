import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none',
        opacity: todo.completed ? 0.6 : 1 
      }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>
        🗑️ Delete
      </button>
    </li>
  );
}

export default TodoItem;
