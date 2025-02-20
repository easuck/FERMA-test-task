import './Task.scss'
import {ITodo} from "../../models/ITodo.ts";
import {useDispatch} from "react-redux";
import {editTodo, removeTodo} from "../../store/todoSlice.ts";
import {useState} from "react";

type Props = {
    todo: ITodo
}

const Task = ({todo}: Props) => {
    const dispatch = useDispatch();
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [text, setText] = useState<string>(todo.text);
    const handleDelete = () => {
        dispatch(removeTodo(todo.id));
    }
    const handleSave = () => {
        const newTodo: ITodo = {
            ...todo,
            text: text,
        }
        dispatch(editTodo(newTodo));
        setIsEditable(false);
    }
    return (
        <div className='Task'>
            <h2 className='text-20 bold'>Сегодня</h2>
            <div className='Task_content'>
                <div className='Task_content_status'/>
                {!isEditable &&
                    <h2 className='text-16 regular'>{todo.text}</h2>
                }
                {isEditable &&
                    <input value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                }
            </div>
            <div className='Task_icons'>
                <img src='/DeleteIcon.png'
                    alt='delete'
                    onClick={handleDelete}
                />
                {!isEditable &&
                    <img src='/ChangeIcon.png'
                         alt='change'
                         onClick={() => setIsEditable(true)}
                    />
                }
                {isEditable &&
                    <img src='/ChangeIconBlue.png'
                         alt='change'
                         onClick={handleSave}
                    />
                }
            </div>
        </div>
    );
};

export default Task;