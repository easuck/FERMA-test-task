import './TaskBar.scss'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/todoSlice.ts";
import {ITodo} from "../../models/ITodo.ts";
import {v4 as uuid} from 'uuid';
import {TagType} from "../TagChip/TagChip.tsx";


type Props = {
    classname?: string;
}

const TaskBar = ({classname}: Props) => {
    const [text, setText] = useState<string>('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text != ''){
            const todo: ITodo = {
                id: uuid(),
                status: TagType.ALL,
                text: text
            }
            dispatch(addTodo(todo));
            setText('');
        }
    }
    return (
        <div className={`TaskBar ${classname}`}>
            <input className='TaskBar_input regular'
                   placeholder='Создать задачу'
                   value={text}
                   onChange={(e) => setText(e.target.value)}
            />
            <img src='/AddIcon.png'
                 alt='add'
                 className='TaskBar_icon'
                 onClick={(e) => handleSubmit(e)}
            />
        </div>

    );
};

export default TaskBar;