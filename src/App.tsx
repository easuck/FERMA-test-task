import './App.scss'
import TaskBar from "./components/TaskBar/TaskBar.tsx";

const App = () => {
    return (
        <div className='mainPage'>
            <h1>Список дел</h1>
            <TaskBar/>
        </div>
    );
};

export default App;
