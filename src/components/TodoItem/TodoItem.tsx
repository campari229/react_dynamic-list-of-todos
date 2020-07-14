import React from 'react';
import { Todo } from '../Interfaces/Interfaces';

interface Props {
  todo: Todo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <div className="todo__item-wrapper" style={{ backgroundColor: `${todo.completed ? 'green' : 'red'}` }}>
      <span>{todo.user?.name}</span>
      <p>{todo.title}</p>
    </div>
  );
};
