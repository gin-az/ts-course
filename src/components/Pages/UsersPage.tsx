import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../types/types";
import axios from "axios";
import UniversalList from "../UniversalList";
import UserItem from "../UserItem";
import { useNavigate } from 'react-router-dom';

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e)
    }
  }

  return (
      <UniversalList items={users} renderItem={(user: IUser) => <UserItem user={user} onClick={() => navigate(`/users/${user.id}`)} key={user.id} />} />
  );
};

export default UsersPage;