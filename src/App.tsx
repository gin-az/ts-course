import React from 'react';
import Card, {CardVariant} from "./components/Card";

const App = () => {
  return (
    <div>
       <Card onClick={(num) => console.log('click', num)} height='250px' width='250px' variant={CardVariant.primary}>
         <button>Кнопка</button>
         <p>Абзац</p>
       </Card>
    </div>
  );
};

export default App;