const usersURL = 'https://mate.academy/students-api/users';
const todosURL = 'https://mate.academy/students-api/todos';

export const getUsers = async <T>(): Promise<{data: T}> => {
  const response = await fetch(usersURL);

  return response.json();
};

export const getTodos = async <T>(): Promise<{data: T}> => {
  const response = await fetch(todosURL);

  return response.json();
};
