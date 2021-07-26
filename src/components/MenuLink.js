import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_menuLink.scss';

const MenuLink = ({ path, esp, eng, setEnglish }) => {
    const [link, setLink] = useState(esp);

    const mouseOver = () => {
        setLink(eng);
    };

    const mouseLeave = () => {
        setLink(esp);
    };

    return (
        <Link to={path} onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
            <li className='link'>{!setEnglish ? link : eng}</li>
        </Link>
    );
};

export default MenuLink;
