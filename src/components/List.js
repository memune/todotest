
import styled from 'styled-components'
import Item from './Item.js'


const List = ({todoList, setTodoList, deletedItemAlert})=> {


  return ( 
    todoList.map((todo, i)=>{
      return (
        <Item todoList={todoList} setTodoList={setTodoList} todo={todo} i={i}/>
      )
    })
  )
}

export default List