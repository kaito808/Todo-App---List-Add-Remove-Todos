import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} task={todo} removeTodo={removeTodo} />
        ))} {/* Here, add the closing parenthesis */}
      </ul>
    </div>
  );
}

export default TodoList;
