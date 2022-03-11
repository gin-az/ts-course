import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import UniversalList from "./components/UniversalList";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";

// HARDCORE MOCK
// const users: IUser[] = [
//   {id: 1, name: 'Oleg', email: 'assembler@ml.ru', address:{city: 'Москва', street:"Тверская-Ямская", zipcode: '123'}},
//   {id: 2, name: 'TIMUR', email: 'delphi@ml.ru', address:{city: 'Уфа', street:"Ленина", zipcode: '450000'}},
// ]

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e)
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=15');
      setTodos(response.data);
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
       <Card onClick={(num) => console.log('click', num)} height='250px' width='250px' variant={CardVariant.primary}>
         <button>Кнопка</button>
         <p>Абзац</p>
       </Card>

      <h2>USER_LIST:</h2>
       <UserList users={users} />
      <h2>UNIVERSAL_LIST_USER:</h2>
       <UniversalList items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />

      <h2>UNIVERSAL_LIST_TODOS:</h2>
        <UniversalList items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
    </div>
  );
};

export default App;