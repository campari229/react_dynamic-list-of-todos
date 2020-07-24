import React from 'react';
import './App.css';

import { Todo, User, PreparedTodo } from './components/Interfaces/Interfaces';
import { TodoList } from './components/TodoList/TodoList';
import { getData, usersURL, todosURL } from './api';
import { Buttons } from './components/Buttonns/Buttons';

interface State {
  todos: PreparedTodo[];
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
    });

    const todos = await getData<Todo[]>(todosURL);
    const users = await getData<User[]>(usersURL);
    const preparedTodos = todos.map((todo) => (
      {
        ...todo,
        user: users.find((user) => user.id === todo.userId),
      }
    ));

    this.setState({
      todos: preparedTodos,
      isLoading: false,
    });
  };

  sortByTitle = () => {
    this.setState(prevState => ({
      todos: prevState.todos.sort((a, b) => a.title.localeCompare(b.title)),
    }));
  };

  sortByName = () => {
    this.setState(prevState => ({
      todos: prevState.todos.sort((a, b) => {
        if (a.user && b.user) {
          return a.user.name.localeCompare(b.user.name);
        }

        return 0;
      }),
    }));
  };

  showCompleted = () => {
    this.setState(prevState => ({
      todos: prevState.todos.sort((a, b) => Number(b.completed) - Number(a.completed)),
    }));
  };

  render() {
    const { todos, isLoading } = this.state;

    return (
      <div className="todo">
        <h1>Dynamic list of todos</h1>
        {
          todos.length
            ? (
              <div>
                <Buttons
                  titleSort={this.sortByTitle}
                  nameSort={this.sortByName}
                  showCompleted={this.showCompleted}
                />
                <TodoList todos={todos} />
              </div>
            )
            : (
              <button
                className="btn"
                type="button"
                onClick={this.loadTodos}
                disabled={isLoading}
              >
                {`${isLoading ? 'Loading...' : 'Load'}`}
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
