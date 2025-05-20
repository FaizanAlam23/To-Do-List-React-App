import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, toggleComplete, deleteTodo, toggleEdit, updateTodo }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="no-task">No tasks yet...</p>
      ) : (
        todos.map(todo => (
        <>
        <ToDoItem 
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          toggleEdit={toggleEdit}
          updateTodo={updateTodo}
        />
        <hr/>
        </>
        ))
      )}
      
    </div>
  );
};

export default ToDoList;
