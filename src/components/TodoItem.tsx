import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface ITodoItemProps {
  todo: ITodo;
  onClick: (todo: ITodo) => void;
}

const TodoItem: FC<ITodoItemProps> = ({todo, onClick}) => {
  return (
    <div onClick={() => onClick(todo)} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
      <input type="checkbox" checked={todo.completed} />
      {todo.id}. {todo.title}
    </div>
  );
};

export default TodoItem;