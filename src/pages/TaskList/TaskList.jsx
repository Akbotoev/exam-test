import './TaskList.scss';

export const TaskList = () => {
    
    return(

        <>
        <div className='container'>
            <div className='container__box'>
                <p className='container__text'>New Task</p>
                <input type='text' placeholder='Add..'/>
                <div className='container__submit'>
                <button className='container__btn'>Save</button>
                <button className='container__btn'>Delete</button>
                </div>
            </div>
        </div>
        </>
    )
}
 export default TaskList;