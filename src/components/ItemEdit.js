const ItemEdit = (props)=>{

    const clickEditButton = ()=>{
        props.setEdited(true)
    }

    return (
        
        props.edited ? (
            <button>확인</button>
            ) : (
            <button onClick={clickEditButton}>수정</button>
        )
        
        // <Button onClick={()=>{
        //     let deletedTodo=todoList.splice(i, 1)
        //     let copyTodoList = [...todoList]
        //     setTodoList(copyTodoList)
        //     deletedItemAlert(deletedTodo)
        //     }}>
        //     삭제
        // </Button> 
    )
}
export default ItemEdit