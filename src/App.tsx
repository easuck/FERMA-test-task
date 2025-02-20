import './App.scss'
import TaskBar from "./components/TaskBar/TaskBar.tsx";
import Task from "./components/Task/Task.tsx";
import TaskList from "./components/TaskList/TaskList.tsx";
import TagBar from "./components/TagBar/TagBar.tsx";
import TagChip, {TagType} from "./components/TagChip/TagChip.tsx";
import {useSelector} from "react-redux";

const App = () => {
    const todos = useSelector((state) => state.todos.todos);
    return (
        <div className='mainPage'>
            <h1 className='bold'>Список дел</h1>
            <TaskBar classname='mt-40'/>
            <TagBar classname='mt-40'>
                <TagChip name={TagType.ALL}/>
                <TagChip name={TagType.COMPLETE}/>
                <TagChip name={TagType.INCOMPLETE}/>
            </TagBar>
            <TaskList classname='mt-20'>
                {todos?.map(todo => {
                    return <Task todo={todo}/>
                })}
            </TaskList>
        </div>
    );
};

export default App;
