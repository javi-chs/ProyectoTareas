import React from 'react';
import './App.scss';
import Tasks from "./componentes/Tasks.jsx";
function App() {
 return (
    <div className="App">
      <header className="App-header"><h1>Lista de tareas</h1></header>
     
      <Tasks/>

    </div>
  );
}

export default App;
