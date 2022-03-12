import React, {FC, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {ITodo} from "../../types/types";
import axios from "axios";

interface TodoItemPageProps {
  id: string;
}

const TodoItemPage: FC = () => {
  // @ts-ignore
  const {id} = useParams<TodoItemPageProps>();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ITodo | null>(null)

  useEffect(() => {
    fetchTodos();
  }, [id]);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodo(response.data);
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div>
      <button onClick={() => navigate(-1)}>Назад</button>
      Привет {todo?.title}
    </div>
  );
};

export default TodoItemPage;