import React, {Component} from 'react';
import Task from "./Task.jsx"


class Tasks extends Component{
    uniqid = require('uniqid');
    constructor(props){
        super(props);
        const INIT = {
            taskList:[],
            newTaskText:"",
            
        }
        this.state = JSON.parse(localStorage.getItem("Tasks")) || INIT;
    }
    //Guardamos el estado de la lista de Tareas en localStorage
    saveToLocalStorage = () => {
        localStorage.setItem("Tasks", JSON.stringify(this.state));
      };
     
// acutualizo el estado y como callback guardo el nuevo estado en localStorage.
     setStateAndSave = update => {
        this.setState(update, this.saveToLocalStorage);
      };

      deleteTask = id => {
        this.setStateAndSave({
          taskList: this.state.taskList.filter(task => task.id !== id),
        });
      };


    addTask = (myNewTaskTex) =>{
        myNewTaskTex= myNewTaskTex.trim();//Elimina los espacios por delante y detrás.
        if(myNewTaskTex){
            const item = {
                
                text: myNewTaskTex,
                completed: false,
                color:"",
                id: this.uniqid()
                
            }
            this.setState({taskList:[item,...this.state.taskList]},this.saveToLocalStorage);
        }
       
    }
    
    enterPressed = (ev)=>{
       if(ev.key === "Enter"){
           this.addTask(this.state.newTaskText);
       }
    }
    toggleCompleteTask = (task) => {
        task.completed = !task.completed;
        this.setState({
          taskList: this.state.taskList.map(item => item.id === task.id ? task : item)

        })
        console.log("Completar ejecutado")
      }

      clearInput = ()=>{
          this.setState({
            newTaskText: ""

          });
      }
      changeTaskColor = (id, color)=>{
        
        this.setStateAndSave(
          {
            taskList: this.state.taskList.map(tarea =>{
              if(tarea.id === id){
                tarea.color = color.hex;
              }
              
              return tarea;
            }),
          } 
        );
      
        
      }

      changeTaskColor2 = (id,color) =>{
       console.log("El puto id de la tarea " +id);
        console.log("El puto objeto color " + color.hex);
      }

    render(){
        return <div className="TasksGlobal">
        <div className="taskAdd">
            <input 
          className="textIn" 
          type="text" 
          placeholder="Introduce una tarea"
          onChange={(evento)=>this.setState({newTaskText: evento.target.value})}
          onKeyPress={this.enterPressed}
          value={this.state.newTaskText}
          ></input>

          <button 
          className="myButton"
          onClick={this.clearInput}
          >Clear</button>

          </div>   
        <main className="taskList">
         

         {this.state.taskList.map(task => (
            <Task
            key={task.id}
            data={task}
            onComplete={this.toggleCompleteTask.bind(this)}
            onDelete={this.deleteTask}
            onColorChange = {this.changeTaskColor}
            
           
            />
          ))}

         
       
        </main>
      </div>
    }
}
export default Tasks;