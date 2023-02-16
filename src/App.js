import './App.css';
import { useState } from 'react';
import Fillo from './Fillo';

function App() {
  const[Estado, SetEstado]= useState(10)
  

  return (
    <>

      <p>{Estado}</p>
      <Fillo funcionIncrementar={SetEstado} est={Estado}/>
    </>
  );
}

export default App;
