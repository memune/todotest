import { useState } from "react";

const Input = ({ addItem })=> {

    const [text, setText] = useState('');
  
    return (
        <>
        <input onChange={(e) => {
          setText(e.target.value)
        }} value={text} />
        
        <button onClick={()=>{
          addItem(text);
          setText('')
        }}>입력해라 이놈아</button> 
        </>
    )
  }

  export default Input