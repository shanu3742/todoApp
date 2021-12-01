
import './App.css';

function App() {


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

  const data = ['hello','hi']
  return (
    <div className="App"><p>Drag the W3Schools image into the rectangle:</p>

    <div id="div1" onDrop={(event) => drop(event) } onDragOver={(event) =>allowDrop(event)} onDragStart={(event) =>drag(event)} >
    {
      data.map((el,i) => {
        return(
          <div id={`drag${i+1}`} src="img_logo.gif" draggable="true" onDragStart={(event) =>drag(event)} width="336" height="69">
    <div>{el} </div>
    </div>
        )
      })
    }
    </div>
  
    
    
    <div id="div1" onDrop={(event) => drop(event) }  onDragOver={(event) =>allowDrop(event)} onDragStart={(event) =>drag(event)}></div>
    
    
    
    <div id="div1" onDrop={(event) => drop(event) } onDragOver={(event) =>allowDrop(event)} onDragStart={(event) =>drag(event)}></div>
    </div>
  );
}

export default App;


// </div>
//     <div id="drag2" src="img_logo.gif" draggable="true" onDragStart={(event) =>drag(event)} width="336" height="69">
//     <div>helll</div>