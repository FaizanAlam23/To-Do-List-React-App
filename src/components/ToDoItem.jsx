import React, { useState } from 'react';

const ToDoItem = ({ todo, toggleComplete, deleteTodo, toggleEdit, updateTodo }) => {
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim() === '') return;
    updateTodo(todo.id, editText);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {todo.isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => toggleEdit(todo.id)}>Cancel</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <span style={{ marginLeft: '10px' }}>{todo.text}</span>
          <div>
            <button onClick={() => toggleEdit(todo.id)}>Edit ✏️</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete 🗑️</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ToDoItem;
