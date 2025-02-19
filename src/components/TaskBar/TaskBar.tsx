import './TaskBar.scss'

type Props = {
    classname?: string;
}

const TaskBar = ({classname}: Props) => {
    return (
        <div className={`TaskBar ${classname}`}>
            <input className='TaskBar_input regular'
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