import React, {FC, useRef, useState} from 'react';
import {log} from "util";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  // неуправляемым input работа ведется через useRef
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('value: ', value);
    console.log('inputRef: ', inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAG');
  }
   const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
     e.preventDefault();
     setIsDrag(false);
   }

   const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDrag(true);
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('DROP');
  }

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder="Управляемый" />
      <input ref={inputRef} type="text" placeholder="Неуправляемый" />
      <button onClick={clickHandler}>Вывести значение в консоль</button>
      <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: '#dd5566'}}></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{width: 200, height: 200, background: isDrag ? '#3355ee' : '#dd5566', marginTop: 10}}>
          Перетащите 1-ый квадрат на 2-ой.
      </div>

    </div>
  );
};

export default EventsExample;