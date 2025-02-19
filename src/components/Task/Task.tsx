import './Task.scss'

type Props = {
    text: string;
}

const Task = ({text}: Props) => {
    return (
        <div className='Task'>
            <h2 className='text-20 bold'>Сегодня</h2>
            <div className='Task_content'>
                <div className='Task_content_status'/>
                <h2 className='text-16 regular'>{text}</h2>
            </div>
            <div className='Task_icons'>
                <img src='/DeleteIcon.png' alt='delete'/>
                <img src='/ChangeIcon.png' alt='change'/>
            </div>
        </div>
    );
};

export default Task;