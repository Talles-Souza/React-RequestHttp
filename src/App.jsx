import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'


function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json);
        })

    }
    loadApi();
  }, []);
  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
    </div>
  )
}

export default App
