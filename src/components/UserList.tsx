import React, { FC } from 'react';
import { IUser } from "../types/types";
import UserItem from "./UserItem";

interface IUserListProps {
  //пользователи: [IUsers]
 users: IUser[]
}

const UserList: FC<IUserListProps> = ({users}) => {
  // console.log(users.[0].address) доступны св-ва описанные в интерфейсе.
  return (
    <div>
      {users.map(user =>
        <UserItem key={user.id} user={user} />
      )}
    </div>
  );
};

export default UserList;