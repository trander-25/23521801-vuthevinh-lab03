import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: false }
  ]);

  function addTodo(text) {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ]);
  }

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <div className="todo-app">
      <h2>📝 To-Do List</h2>
      <TodoForm addTodo={addTodo} />
      <div style={{ 
        marginBottom: '12px', 
        textAlign: 'center',
        color: '#6c757d',
        fontSize: '0.9rem'
      }}>
        {todos.length > 0 && (
          <span>
            {todos.filter(t => t.completed).length} of {todos.length} completed
          </span>
        )}
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoApp;
