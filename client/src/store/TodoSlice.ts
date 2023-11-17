import { create } from "zustand";

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

export interface TodoState {
  todos: Todo[];
  AddTodo: (todo: Todo) => void;
}

export const createTodoSlice = create<TodoState>()((set) => ({
  todos: [],
  AddTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
}));
