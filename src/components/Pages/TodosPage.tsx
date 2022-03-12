import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../../types/types";
import axios from "axios";
import UniversalList from "../UniversalList";
import TodoItem from "../TodoItem";
import { useNavigate } from 'react-router-dom';

const TodosPage:FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=15');
      setTodos(response.data);
    } catch (e) {
      alert(e)
    }
  }

  return (
      <UniversalList items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} onClick={() => navigate('/todos/' + todo.id)} key={todo.id} />} />
  );
};

export default TodosPage;