import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const Header: FC = () => {
  return (
    <div>
      <NavLink to="/users">Пользователи</NavLink>
      <NavLink to="/todos">Список дел</NavLink>
    </div>
  );
};

export default Header;