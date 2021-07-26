import { useState } from 'react';
import '../styles/_knowledge-cards.scss';

const KnowledgeCard = ({ children, alt }) => {
    const [enableAlt, setEnableAlt] = useState(false);

    const altText = () => {
        setEnableAlt(true);
    };

    const logo = () => {
        setEnableAlt(false);
    };

    return (
        <div className='card'>
            <div className='icon' onMouseEnter={altText} onMouseLeave={logo}>
                {enableAlt ? alt : <svg viewBox='0 0 128 128'>{children}</svg>}
            </div>
            <div className='alt-text-resp'>{alt}</div>
        </div>
    );
};

export default KnowledgeCard;
