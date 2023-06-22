import React, {useState} from "react";
import "../components/toDo.css"
function ToDO() {
    const[input,setInput]=useState('');
    const [tasks,setTasks]=useState([
        {id:1,tittle:'Pass Exam',completed:false},
        {id:2,tittle:'Pass Exam2',completed:false}
    ])
function toDoCompleted(id){
        setTasks(tasks.filter(task =>{
            if(task.id === id) {
                task.completed = !task.completed
            }
            return task
        }))
}
function removeTask(id){
        setTasks(tasks.filter(task => task.id !==id))
        }
function addTask(e){
        if(e.code==='Enter' && input.trim()!==''){
            setTasks(tasks.concat([{id:Date.now(), tittle: input}]))
            setInput('')
        }
}
        return(
            <div>
                <h1>ToDoApp</h1>
                <input value={input} name="myInput" onKeyUpCapture={(e)=>addTask(e)}
                       onChange={(e)=>setInput(e.target.value)}/>
                <div>
                    {tasks && tasks.map(task =>{
                        return(
                            <div className="taskWrapper" key={task.id}>
                                <input type="checkbox" onClick={()=>toDoCompleted(task.id)}/>
                                <div className="taskTittle"
                                     style={{textDecoration:task.completed ?'line-through':null}}
                                >{task.tittle}
                                </div>
                                <div
                                    onClick={()=>removeTask(task.id)}
                                    className="close">&times;</div>
                            </div>
                        )

                    })}
                </div>
            </div>
        )

}

export default ToDO;

