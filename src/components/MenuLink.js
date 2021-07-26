import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_menuLink.scss';

const MenuLink = ({ path, esp, eng }) => {
    const [link, setLink] = useState(esp);

    const mouseOver = () => {
        setLink(eng);
    };

    const mouseLeave = () => {
        setLink(esp);
    };

    return (
        <Link to={path} onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
            <li>{link}</li>
        </Link>
    );
};

export default MenuLink;
