import './App.scss'
import TaskBar from "./components/TaskBar/TaskBar.tsx";
import Task from "./components/Task/Task.tsx";
import TaskList from "./components/TaskList/TaskList.tsx";
import TagBar from "./components/TagBar/TagBar.tsx";
import TagChip, {TagType} from "./components/TagChip/TagChip.tsx";

const App = () => {
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
                <Task text='найти работу'/>
                <Task text='найти работу'/>
            </TaskList>
        </div>
    );
};

export default App;
