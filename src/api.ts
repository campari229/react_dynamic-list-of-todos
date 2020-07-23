const usersURL = 'https://mate.academy/students-api/users';
const todosURL = 'https://mate.academy/students-api/todos';

export const getUsers = async <T>(): Promise<T> => {
  const response = await fetch(usersURL);
  const result = await response.json();

  return result.data;
};

export const getTodos = async <T>(): Promise<T> => {
  const response = await fetch(todosURL);
  const result = await response.json();

  return result.data;
};
