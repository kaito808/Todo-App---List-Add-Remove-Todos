import React from 'react';

function Todo({ task, index, removeTodo }) {
  return (
    <li>
      {task}
      <button onClick={() => removeTodo(index)}>X</button>
    </li>
  );
}

export default Todo;
