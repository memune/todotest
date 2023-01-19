const ItemText = (props) => {
    return (
        <div>
            {props.edited ? (
                <input placeholder={ props.todoText }></input>
                ) : (
                <div>{ props.todoText }</div>
                )
            }
        </div>

    )
}

export default ItemText