const List = ({todoList})=> {
    return (
      todoList.map((todo, i)=>{
        return <div key={i}>{todo}</div>
      })
    )
  }

export default List