import React from 'react';
import ColorSelector from "./ColorSelector.jsx"

function prueba(){console.log("asta aki hemos llegao")}
//()=> props.onDelete(props.data.id) incicamos que hay un atributo de la etiqueta que ref
// que sera onDelete y que manejara ese evento y le pasamos data.id.
// onColorSelected = {color => props.onColorChange(props.data.id, color)}
function Task(props) {
  return (
    <div 
    className={ `miTarea ${props.data.completed ? 'completada':''}`}
    style={{
      borderRightStyle: "solid",
      borderRightWidth:"10px",
      borderRightColor: props.data.color || "transparent",
      borderRadius: "50px"
      
      }}
    >
      <span className='textoTarea'> {props.data.text}</span>
      <div className='actions'>
        <button className="myButton" onClick={()=> props.onDelete(props.data.id)}>Eliminar</button>
        <button className="myButton" onClick={() => props.onComplete(props.data)}>Completar</button>
        <ColorSelector
        className="myColorPicker"
        onColorSelected = {color => props.onColorChange(props.data.id, color)}
        />
      </div>
    </div>
  );
}

export default Task;



