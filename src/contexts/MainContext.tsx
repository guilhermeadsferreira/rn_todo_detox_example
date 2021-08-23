import 'react-native-get-random-values';
import React, {createContext, useEffect, useState} from 'react';
import Todo from '../entities/Todo';
import TodoRepository from '../repositories/base/TodoRepository';
import {v4 as uuidv4} from 'uuid';

interface IMainContext {
  todos: Todo[];
  todosDeleted: Todo[];
  addNewTodo: () => void;
  removeTodo: (uuid: string) => void;
  updateTodoStatus: (uuid: string) => void;
  setTodoInput: (value: string) => void;
  todoInput: string;
  recoveryItemOfHistory: (item: Todo) => void;
}

export const MainContext = createContext({} as IMainContext);

const MainContextProvider: React.FC = ({children}) => {
  const todoRepo = new TodoRepository('@todos');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosDeleted, setTodosDeleted] = useState<Todo[]>([]);
  const [todoInput, setTodoInput] = useState('');

  useEffect(() => {
    (async () => {
      const getTodos = await todoRepo.findAll();
      const filterTodosNotDeleted = getTodos.filter(item => !item.deleted);
      const filterTodosDeleted = getTodos.filter(item => item.deleted);
      setTodos(filterTodosNotDeleted);
      setTodosDeleted(filterTodosDeleted);
    })();
  }, []);

  const addNewTodo = () => {
    const uuid = uuidv4();
    const newTodo = new Todo(uuid, todoInput, false, false);
    todoRepo.create(newTodo);
    setTodos(value => [...value, newTodo]);
    setTodoInput('');
  };

  const removeTodo = (uuid: string) => {
    let removedTodo = {} as Todo;
    const allTodos = [...todos, ...todosDeleted];
    const newArrayWithTodos = allTodos.map(item => {
      if (item.id === uuid) {
        removedTodo = {...item, deleted: true};
        return removedTodo;
      }
      return item;
    });
    const filterTodos = todos.filter(item => item.id !== uuid);
    todoRepo.update(newArrayWithTodos);
    setTodos(filterTodos);
    setTodosDeleted(value => [...value, removedTodo]);
  };

  const updateTodoStatus = (uuid: string) => {
    const newArrayWithTodos = todos.map(item => {
      if (item.id === uuid) {
        return {...item, closed: !item.closed};
      }
      return item;
    });
    todoRepo.update(newArrayWithTodos);
    setTodos(newArrayWithTodos);
  };

  const recoveryItemOfHistory = (item: Todo) => {
    const newTodosDeleted = todosDeleted.filter(i => i.id !== item.id);
    const allTodos = [...todos, ...todosDeleted];
    const newArrayWithTodos = allTodos.map(i => {
      if (i.id === item.id) {
        return {...i, deleted: false};
      }
      return i;
    });
    setTodos(value => [...value, item]);
    setTodosDeleted(newTodosDeleted);
    todoRepo.update(newArrayWithTodos);
  };

  return (
    <MainContext.Provider
      value={{
        todos,
        addNewTodo,
        removeTodo,
        updateTodoStatus,
        todoInput,
        setTodoInput,
        todosDeleted,
        recoveryItemOfHistory,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
