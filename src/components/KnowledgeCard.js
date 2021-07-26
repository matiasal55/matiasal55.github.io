import { useState } from 'react';
import '../styles/_knowledge-cards.scss';

const KnowledgeCard = ({ children, alt }) => {
    const [content, setContent] = useState(children);

    const altText = () => {
        setContent(alt);
    };

    const logo = () => {
        setContent(children);
    };

    return (
        <div className='card'>
            <div className='icon' onMouseEnter={altText} onMouseLeave={logo}>
                {content}
            </div>
            <div className='alt-text-resp'>{alt}</div>
        </div>
    );
};

export default KnowledgeCard;
