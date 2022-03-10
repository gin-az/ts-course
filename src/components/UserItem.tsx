import React, {FC} from 'react';
import {IUser} from "../types/type";

interface IUserItemProps {
  user: IUser;
}

const UserItem: FC<IUserItemProps> = ({user}) => {
  return (
    <div>
      <div style={{padding: 15, border: '1px solid gray', marginTop: 2}}>
        {user.id}). {user.name} проживает в городе {user.address.city} на улице {user.address.street}
      </div>
    </div>
  );
};

export default UserItem;