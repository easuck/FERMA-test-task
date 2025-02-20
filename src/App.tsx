import './App.scss'
import TaskBar from "./components/TaskBar/TaskBar.tsx";
import Task from "./components/Task/Task.tsx";
import TaskList from "./components/TaskList/TaskList.tsx";
import TagBar from "./components/TagBar/TagBar.tsx";
import TagChip, {TagType} from "./components/TagChip/TagChip.tsx";
import {useSelector} from "react-redux";
import {useState} from "react";

const App = () => {
    const todos = useSelector((state) => state.todos.todos);
    const [activeTag, setActiveTag] = useState<TagType>(TagType.ALL);
    return (
        <div className='mainPage'>
            <h1 className='bold'>Список дел</h1>
            <TaskBar classname='mt-40'/>
            <TagBar classname='mt-40'>
                <TagChip
                    name={TagType.ALL}
                    activeTag={activeTag}
                    setActiveTag={setActiveTag}
                />
                <TagChip
                    name={TagType.COMPLETE}
                    activeTag={activeTag}
                    setActiveTag={setActiveTag}
                />
                <TagChip
                    name={TagType.INCOMPLETE}
                    activeTag={activeTag}
                    setActiveTag={setActiveTag}
                />
            </TagBar>
            <TaskList classname='mt-20'>
                {todos?.map(todo => {
                    return activeTag == todo.status && <Task todo={todo}/>
                })}
            </TaskList>
        </div>
    );
};

export default App;
