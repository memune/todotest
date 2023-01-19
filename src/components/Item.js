import ItemDelete from "./ItemDelete"
import ItemText from "./ItemText"
import ItemEdit from "./ItemEdit"
import { useState } from "react"

const Item = (props) => {

    const [edited, setEdited] = useState(false);

    return (
        
        <div>
            <ItemText todoText={ props.todo } edited={ edited }/>
            <ItemDelete todoList={ props.todoList } setTodoList= { props.setTodoList }todoText={ props.todo }/>
            <ItemEdit todoText={ props.todo } edited = { edited } setEdited = {setEdited}/>
        </div> 
    )
}

export default Item