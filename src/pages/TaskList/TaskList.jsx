
import { useState } from 'react';
import './TaskList.scss';


export const TaskList = () => {
    
    const [count, setCount] = useState(0)
    const [tasks, setTasks] = useState([])
    const [ task, setTask] = useState('')

    
    const addTask = () => {
        setTasks([...tasks, task])
        setTask('')
        
        
    }
    const handleChange = (e) =>{
        setTask(e.target.value)
        console.log(e.target.value)
    }
return(
    <>
    <div className='container'>
        <div className='container__todo'>
        <h1>New Task</h1>
            <input type='text'
            onChange={handleChange}
            placeholder='Add new task'/>
            
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((t,index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </div>
        </div>
        </>
)

}
 export default TaskList;