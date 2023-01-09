import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import List from './components/List';


function App() {
  const [todoList, setTodoList] = useState([])

  const addItem = (text)=> {
    setTodoList([text, ...todoList])
  }

  return (
    <div className="App">
      <Input addItem={addItem}/>
      <List todoList={todoList}/>
    </div>
  );
}

export default App;
