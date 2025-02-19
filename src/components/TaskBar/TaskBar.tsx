import './TaskBar.scss'

const TaskBar = () => {
    return (
        <div className='TaskBar'>
            <input className='TaskBar_input'
                   placeholder='Создать задачу'
            />
            <img src='/AddIcon.png'
                 alt='add'
                 className='TaskBar_icon'
            />
        </div>

    );
};

export default TaskBar;