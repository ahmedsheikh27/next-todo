"use client";

import TodoItems from '@/components/TodoItems';
import { Todo } from '@/types/Todo';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []); // Empty dependency array ensures this only runs once

  // Save todos to localStorage whenever `todos` state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    const newTodos = [
      ...todos,
      { id: Date.now().toString(), text: newTodo, completed: false },
    ];
    setTodos(newTodos); // Update the todos state with the new todo
    setNewTodo(''); // Clear the input field
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };
  const toggleTodoCompletion = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
<main className="w-screen h-screen flex flex-col items-center relative overflow-hidden">
  <div
    className="absolute top-0 w-full h-1/2 bg-cover bg-center"
    style={{ backgroundImage: "url(/bg-desktop-light.jpg)" }}
  >
  </div>
  <div className="relative z-10 max-w-[400px] m-3 w-full p-5 mt-[150px] bg-black bg-opacity-50 rounded-lg">
    <h1 className="text-4xl font-bold text-white mb-2 text-center">TODO LIST</h1>
    <div className="flex mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        className="flex-grow border p-2 rounded-lg h-[50px]"
      />
      <button onClick={addTodo} className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
        Add
      </button>
    </div>
    <div className="max-h-[300px] overflow-y-auto">
      {todos.map((todo) => (
        <TodoItems
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onEdit={editTodo}
          onToggleComplete={toggleTodoCompletion}
        />
      ))}
    </div>
  </div>
</main>




  );
};

export default TodoList;
