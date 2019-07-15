import React from 'react';
import classes from './App.css'
import './App.css';
import TodoForm from './Containers/TodoForm/TodoForm'

function App() {
  return (
    <div className={classes.App}>
      <TodoForm/>
    </div>
  );
}

export default App;
