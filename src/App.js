
import React from 'react';
import InputButton from './core/InputButton/InputButton';
import './App.css'
import Cube from './core/Cube/Cube';



function App() {

  const [totalTask,setTotalTask] =React.useState([])
  
  console.log(totalTask)
 
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
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
   <div className='worktoDo'>heading</div>
  
   <div className='dragDiv' id="div1" onDrop={(event) => drop(event) } onDragOver={(event) =>allowDrop(event)} onDragStart={(event) =>drag(event)} >
   {
     totalTask.map((el,i) => {
       return(
         <div  id={`drag${i+1}`} src="img_logo.gif" draggable="true" onDragStart={(event) =>drag(event)} width="336" height="300">
   <div className='elementdiv '>{el} </div>
   </div>
       )
     })
   }
   </div>
   </div>
 
   
   <div className='workContainerCard'>
   <div className='workinProgress'>heading</div>
   <div className='progressdiv' id="div1" onDrop={(event) => drop(event) }  onDragOver={(event) =>allowDrop(event)} onDragStart={(event) =>drag(event)}></div>
   
   </div>
   <div className='workContainerCard'>
   <div className='workinDone'>heading</div>
   <div className='successdiv' id="div1" onDrop={(event) => drop(event) } onDragOver={(event) =>allowDrop(event)} onDragStart={(event) =>drag(event)}></div>
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