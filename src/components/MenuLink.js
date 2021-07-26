import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink exact to={path} activeClassName='active' onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
            <li className='link'>{!setEnglish ? link : eng}</li>
        </NavLink>
    );
};

export default MenuLink;
