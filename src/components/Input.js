import { useState } from "react";

const Input = ({ addItem })=> {

    const [text, setText] = useState('');
  
    return (
        <>
          <input onChange={(e) => {
            setText(e.target.value)
          }} value={text} />
          
          <button onClick={()=>{
            if (text==="") {
              return null
            }
            addItem(text);
            setText('')
          }}>입력</button> 
        </>
    )
  }

  export default Input