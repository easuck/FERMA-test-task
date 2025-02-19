import './TaskList.scss'

const TaskList = ({children}) => {
    return (
        <div className='TaskList'>
            {children}
        </div>
    );
};

export default TaskList;