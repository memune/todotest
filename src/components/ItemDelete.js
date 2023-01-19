const ItemDelete = (props)=>{
    return (
        <button onClick={()=>{
            props.todoList.splice(props.i,1)
            let copyTodoList = [...props.todoList]
            props.setTodoList(copyTodoList)
        }}>삭제</button>
    )
}

export default ItemDelete