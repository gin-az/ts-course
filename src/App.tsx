import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import UniversalList from "./components/UniversalList";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersPage from "./components/Pages/UsersPage";
import TodosPage from "./components/Pages/TodosPage";
import Root from "./components/Routers/Root";
import Header from "./components/Header";

// HARDCORE MOCK
// const users: IUser[] = [
//   {id: 1, name: 'Oleg', email: 'assembler@ml.ru', address:{city: 'Москва', street:"Тверская-Ямская", zipcode: '123'}},
//   {id: 2, name: 'TIMUR', email: 'delphi@ml.ru', address:{city: 'Уфа', street:"Ленина", zipcode: '450000'}},
// ]

const App = () => {

  return (

    <div>
      <Header />
      <Root />
      <hr />
       <Card onClick={(num) => console.log('click', num)} height='250px' width='250px' variant={CardVariant.primary}>
         <button>Кнопка</button>
         <p>Абзац</p>
       </Card>

     <h2>Event_types</h2>
      <EventsExample />
    </div>
  );
};

export default App;