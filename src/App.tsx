import './App.scss'
import TaskBar from "./components/TaskBar/TaskBar.tsx";
import Task from "./components/Task/Task.tsx";
import TaskList from "./components/TaskList/TaskList.tsx";
import TagBar from "./components/TagBar/TagBar.tsx";
import TagChip, {TagType} from "./components/TagChip/TagChip.tsx";

const App = () => {
    return (
        <div className='mainPage'>
            <h1>Список дел</h1>
            <TaskBar/>
            <TagBar>
                <TagChip name={TagType.ALL}/>
                <TagChip name={TagType.COMPLETE}/>
                <TagChip name={TagType.INCOMPLETE}/>
            </TagBar>
            <TaskList>
                <Task text='найти работу'/>
                <Task text='найти работу'/>
            </TaskList>
        </div>
    );
};

export default App;
