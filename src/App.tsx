import React from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/type";

// HARDCORE MOCK
const users: IUser[] = [
  {id: 1, name: 'Oleg', email: 'assembler@ml.ru', address:{city: 'Москва', street:"Тверская-Ямская", zipcode: '123'}},
  {id: 2, name: 'TIMUR', email: 'delphi@ml.ru', address:{city: 'Уфа', street:"Ленина", zipcode: '450000'}},

]

const App = () => {
  return (
    <div>
       <Card onClick={(num) => console.log('click', num)} height='250px' width='250px' variant={CardVariant.primary}>
         <button>Кнопка</button>
         <p>Абзац</p>
       </Card>

       <UserList users={users} />
    </div>
  );
};

export default App;