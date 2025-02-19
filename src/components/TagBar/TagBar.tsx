import './TagBar.scss'

type Props = {
    classname?: string;
    children: React.ReactNode;
}

const TagBar = ({children, classname}: Props) => {
    return (
        <div className={`TagBar ${classname}`}>
            {children}
        </div>
    );
};

export default TagBar;