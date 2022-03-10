import React, {FC} from 'react';

//<T> - generic  любым типом, его обычно обозачают буквой Т
interface IListProps<T> {
  // ожидаем массив элементов, которые м/б любого типа
  items: T[];
  // Вторым пропсом будет компонент (callback) который необходимо отрисовать
  renderItem: (item: T) => React.ReactNode
}
// const component = <T,>(props: Type<T>) => {}

const UniversalList = <T,> (props:IListProps<T>) => {
  return (
    <div>
      {props.items.map(props.renderItem)}
    </div>
  );
};

export default UniversalList;