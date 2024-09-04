
import { useState } from 'react';
import './TaskList.scss';


export const TaskList = () => {
    
    const [count, setCount] = useState(0)
    const [tasks, setTasks] = useState([])
    const [ task, setTask] = useState('')

    const incriment = () => setCount(count + 1);
    const dicriment = () => setCount(count - 1);

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
        <div className='container__count'>
        <h1>Count:{count}</h1>
        <button onClick={incriment}>Добавить</button>
        <button onClick={dicriment}>Удалить</button>
        </div>

        <div className='container__todo'>
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