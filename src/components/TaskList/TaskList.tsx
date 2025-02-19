import './TaskList.scss'

type Props = {
    classname?: string;
    children: React.ReactNode;
}

const TaskList = ({children, classname}: Props) => {
    return (
        <div className={`TaskList ${classname}`}>
            {children}
        </div>
    );
};

export default TaskList;