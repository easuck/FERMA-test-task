import './TagChip.scss'
import {SetStateAction} from "react";


export enum TagType{
    'ALL' = 'Все',
    'COMPLETE' = 'Выполнено',
    'INCOMPLETE' = 'Не выполнено'
}
type Props = {
    name: TagType;
    activeTag: TagType;
    setActiveTag: React.Dispatch<SetStateAction<TagType>>
}

const tagStyles = {
    'Все': 'TagChip_all',
    'Выполнено': 'TagChip_complete',
    'Не выполнено': 'TagChip_incomplete'
}

const TagChip = ({name, activeTag, setActiveTag}: Props) => {
    return (
        <div className={`TagChip ${tagStyles[name]} ${activeTag == name && tagStyles[name] + '_active'}`}
            onClick={() => (setActiveTag(name))}
        >
            <h3 className='regular'>{name}</h3>
        </div>
    );
};

export default TagChip;