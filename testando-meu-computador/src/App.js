import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
const tarefas = ['Acordar' ,'Tomar café', 'Escovar os dentes', 'Estudar'];

function App() {
  return (
    <div className='App'>
      <h1>APP</h1>
      <ul> {tarefas.map((tarefa) => Task(tarefa))} </ul>
    </div>
  );
}

export default App;