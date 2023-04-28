import React, { useRef, useState } from 'react'
import InputTextBoxComponent from './InputTextBoxComponent';

function InputBoxComponent() {
  const [value,setValue]=useState('');
  const useRefInput=useRef(null);
  const[Inputs,setInput]=useState('');
  const printMessage=()=>{
   
    setInput(useRefInput.current.value);
    console.log(Inputs);
  }
  // const displayInParagragth= event=>{
  //   setValue(event.target.value);
  //   // console.log(value);
  // }
  return (
    <div>
      <input type='text'onChange={(event)=>setValue(event.target.value)}/>
      <p>{value}</p>
      <input type='text' ref={useRefInput}></input>
      <button onClick={printMessage}>Hi</button>
      <p>{Inputs}</p>
      <InputTextBoxComponent/>
    </div>
  )
}

export default InputBoxComponent