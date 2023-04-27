import React from 'react'

function EventComponent() {
  const deleteFuntion=()=>{
    var Result=document.getElementById('result').value;
    var lengthOfResult=Result.length;
    Result=Result.substring(0,lengthOfResult-1);
    document.getElementById('result').value=Result;
  }
 
  const equalFuntion=()=>{
    var number1=(document.getElementById('result').value);
    var Result=eval(number1)
    if(Result!==undefined){
   document.getElementById('result').value=Result;
    }
    else{
      alert("Give Inputs!")
    }
  }
 
  const clearFuntion=()=>{
    document.getElementById('result').value='';
  }
const display=(a)=>{
  document.getElementById('result').value+=a;
}
  return (
    <React.Fragment>
    <div>
      <input type='text' id='result'/>
      <button onClick={clearFuntion} >C</button>
      
    </div>
    <div>
    <button onClick={()=>display('7')} >7</button>
    <button onClick={()=>display('8')} >8</button>
    <button onClick={()=>display('9')} >9</button>
    <button onClick={()=>display('/')} >/</button>
    </div>
    <div>
    <button onClick={()=>display('4')} >4</button>
    <button onClick={()=>display('5')} >5</button>
    <button onClick={()=>display('6')} >6</button>
    <button onClick={()=>display('*')} >*</button>
    </div>
     
    <div>
    <button onClick={()=>display('1')} >1</button>
    <button onClick={()=>display('2')} >2</button>
    <button onClick={()=>display('3')} >3</button>
    <button onClick={()=>display('-')} >-</button>
    </div>
    <div>
    <button onClick={()=>display('0')} >0</button>
    <button onClick={()=>display('.')} >.</button>
    <button onClick={equalFuntion} >=</button>
    <button onClick={()=>display('+')} >+</button>
    </div>
    <button onClick={deleteFuntion}>Del</button>
   
    </React.Fragment>
  
  )
}

export default EventComponent