import React, {FC} from 'react';
import {IUser} from "../types/types";

interface IUserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<IUserItemProps> = ({user, onClick}) => {
  return (
    <div>
      <div onClick={() => onClick(user)} style={{padding: 15, border: '1px solid gray', marginTop: 2}}>
        {user.id}). {user.name} проживает в городе {user.address.city} на улице {user.address.street}
      </div>
    </div>
  );
};

export default UserItem;