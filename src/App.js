
import { useState } from 'react';
import './App.css';
import Contador from './views/Contador';

function App() {

  const [contador, setContador] = useState(0)
  return (
    <div className="App">
      <p>Hola</p>
      <Contador contador={contador} setContador={setContador}/>
    </div>
  );
}

export default App;
