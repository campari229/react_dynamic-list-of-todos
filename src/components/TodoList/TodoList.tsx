import React from 'react';
import { Todo } from '../Interfaces/Interfaces';
import { TodoItem } from '../TodoItem/TodoItem';

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="todo__list list">
      {todos.map(todo => (
        <li
          className="list__item"
          key={todo.id}
        >
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};
