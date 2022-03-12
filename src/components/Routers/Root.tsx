import React from 'react';
import {Route, Routes} from "react-router-dom";
import UsersPage from "../Pages/UsersPage";
import TodosPage from "../Pages/TodosPage";
import UserItemPage from "../Pages/UserItemPage";
import TodoItemPage from "../Pages/TodoItemPage";

const Root = () => {
  return (
    <Routes>
      <Route path="/users"
             element={<UsersPage />}
      />
      <Route path="/todos"
             element={<TodosPage />}
      />
      <Route path="/users/:id"
             element={<UserItemPage />}
      />
      <Route path="/todos/:id"
             element={<TodoItemPage />}
      />
    </Routes>
  );
};

export default Root;