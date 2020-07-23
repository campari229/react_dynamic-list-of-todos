import React from 'react';
import { PreparedTodo } from '../Interfaces/Interfaces';

import './TodoItem.css';

interface Props {
  todo: PreparedTodo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => (
  <div className="todo__item-wrapper" style={{ backgroundColor: `${todo.completed ? 'green' : 'red'}` }}>
    <span className="todo__item-name">{todo.user?.name}</span>
    <p className="todo__item-title">{todo.title}</p>
  </div>
);
