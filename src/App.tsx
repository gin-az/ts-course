import React from 'react';
import Card from "./components/Card";

const App = () => {
  return (
    <div>
       <Card height='250px' width='250px'>
         <button>Кнопка</button>
         <p>Абзац</p>
       </Card>
    </div>
  );
};

export default App;