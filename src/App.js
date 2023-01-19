import './App.css';
import { useEffect, useState } from 'react';
import Input from './components/Input';
import List from './components/List';
import styled from 'styled-components'


function App() {
  
  const [todoList, setTodoList] = useState([])
  const [deletedTodo, setDeletedTodo] = useState()

  const addItem = (text)=> {
    setTodoList([...todoList, text])
  }

  const deletedItemAlert = (deletedItem)=> {
    setDeletedTodo(deletedItem)
  }

  const TodoInput = styled.div`
    padding: 2em 2em 2em 2em;
  `

  return (
    <TodoInput className="App">
      <Input addItem={addItem}/>
      <List todoList={todoList} setTodoList={setTodoList} deletedItemAlert={deletedItemAlert}/>
      { useEffect(()=>{
        console.log("Hello")
      }, deletedTodo)}
    </TodoInput>
  );
}

export default App;
