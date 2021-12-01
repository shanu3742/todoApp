import React from 'react'
import {Input} from 'rsuite'


const InputButton = ({totalTask,setTotalTask}) => {

    const [input,setInput] = React.useState('')


const getClick = () =>{
    setTotalTask([...totalTask,input])
}
   
    return (
      
        <div className='input_container'>
    <Input placeholder="Enter Your Task" size="lg" onChange = {(e) =>setInput(e)} value={input}/>
    <button className='plus' onClick={getClick}>+</button>
    </div>
        
        
    )
}

export default InputButton
