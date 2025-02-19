import './App.scss'
import TaskBar from "./components/TaskBar/TaskBar.tsx";
import Task from "./components/Task/Task.tsx";

const App = () => {
    return (
        <div className='mainPage'>
            <h1>Список дел</h1>
            <TaskBar/>
            <Task text='найти работу'/>
            <Task text='найти работу'/>
        </div>
    );
};

export default App;
