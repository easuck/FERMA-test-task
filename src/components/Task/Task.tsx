import './Task.scss'

type Props = {
    text: string;
}

const Task = ({text}: Props) => {
    return (
        <div className='Task'>
            <h2>Сегодня</h2>
            <div className='Task_content'>
                <div className='Task_content_status'/>
                <div className='Task_content_text'>{text}</div>
            </div>
            <div className='Task_icons'>
                <img src='/DeleteIcon.png' alt='delete'/>
                <img src='/ChangeIcon.png' alt='change'/>
            </div>
        </div>
    );
};

export default Task;