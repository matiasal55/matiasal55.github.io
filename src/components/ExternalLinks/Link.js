import { useState } from 'react';

const Link = ({ path, children }) => {
    const [fill, setFill] = useState('#fff');

    const handleEnter = () => {
        setFill('#1ab6b9');
    };

    const handleLeave = () => {
        setFill('#fff');
    };

    return (
        <div className='links-icon' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <a href={path} target='_blank' rel='noreferrer'>
                <svg viewBox='0 0 128 128'>{children}</svg>
            </a>
        </div>
    );
};

export default Link;
