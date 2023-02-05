import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

// Add more methods here
export const creatTodos = (title: string) => {
  return client.post<Todo[]>('/todos', {
    userId: 6073,
    completed: false,
    title,
  });
};

export const removeTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};