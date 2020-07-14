import React from 'react';
import './App.css';

import { Todo, User } from './components/Interfaces/Interfaces';
import { TodoList } from './components/TodoList/TodoList';
import { getUsers, getTodos} from './api';
import { Buttons } from './components/Buttonns/Buttons';

interface State {
  todos: Todo[];
  isLoading: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    todos: [],
    isLoading: false,
  };

  loadTodos = async () => {
    this.setState({
      isLoading: true,
    })

    const todos = (await getTodos<[]>()).data
    const users = (await getUsers<[]>()).data
    const preparedTodos = todos.map((todo: Todo) => (
      {
        ...todo,
        user: users.find((user: User) => user.id === todo.userId)
      }
    ))

    this.setState({
      todos: preparedTodos,
      isLoading: false,
    })
  }


  render() {
    const { todos, isLoading } = this.state;

    return (
      <div className="todo">
        <h1>Dynamic list of todos</h1>
        {
          todos.length
          ? <>
          <Buttons />
          <TodoList todos={todos} />
          </>
          : <button
            type="button"
            onClick={this.loadTodos}
            disabled={isLoading}
            >
            {`${isLoading ? 'Loading...' : 'Load'}`}
            </button>
        }
      </div>
    )
  }
}

export default App;
