import './TagChip.scss'


export enum TagType{
    'ALL' = 'Все',
    'COMPLETE' = 'Выполнено',
    'INCOMPLETE' = 'Не выполнено'
}
type Props = {
    name: TagType;
}

const tagStyles = {
    'Все': 'TagChip_all',
    'Выполнено': 'TagChip_complete',
    'Не выполнено': 'TagChip_incomplete'
}

const TagChip = ({name}: Props) => {
    return (
        <div className={`TagChip ${tagStyles[name]}`}>
            <h3>{name}</h3>
        </div>
    );
};

export default TagChip;