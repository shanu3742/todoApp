
import React from 'react';
import InputButton from './core/InputButton/InputButton';
import './App.css'
import Cube from './core/Cube/Cube';



function App() {

  const [totalTask,setTotalTask] =React.useState([])
  
  console.log(totalTask)
 
 
  return (

    <div className='App'>
   <div className='cubeContainer'>
   <Cube />
   </div>
    
   <div className='inputCont'>
   <InputButton totalTask={totalTask} setTotalTask={setTotalTask} />
   </div>
   <div className='work-Container'>
   <div className='workContainerCard'>
   <div className='worktoDo'>Work To Do</div>
   <div className='ediv' >
   {
     totalTask.map((el,i) => {
       return(
         <div className='elementdiv' key={i}>{el}</div>
       )
     })
   }
   </div>
   </div>
   <div className='workContainerCard'>
   <div className='workinProgress'>Work In Progress</div>
   </div>
   <div className='workContainerCard'>
   <div className='workinDone'>Done</div>
   </div>

   </div>
  
    
    </div>
    
  )
}

export default App;


// </div>
//     <div id="drag2" src="img_logo.gif" draggable="true" onDragStart={(event) =>drag(event)} width="336" height="69">
//     <div>helll</div>

// <InputButton totalTask={totalTask} setTotalTask={setTotalTask} />