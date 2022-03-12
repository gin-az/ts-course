import React, { FC } from 'react';
import { IUser } from "../types/types";
import UserItem from "./UserItem";
import { useNavigate } from "react-router-dom";

interface IUserListProps {
  //пользователи: [IUsers]
 users: IUser[]
}

const UserList: FC<IUserListProps> = ({users}) => {
  // console.log(users.[0].address) доступны св-ва описанные в интерфейсе.
  const navigate = useNavigate();

  return (
    <div>
      {users.map(user =>
        <UserItem key={user.id} user={user} onClick={() => navigate(`/users/${user.id}`)} />
      )}
    </div>
  );
};

export default UserList;