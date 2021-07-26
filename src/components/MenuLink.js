import { Link } from 'react-router-dom';
import '../styles/_menuLink.scss';

const MenuLink = ({ path, esp, eng }) => {
    return (
        <Link to={path}>
            <li>{esp}</li>
        </Link>
    );
};

export default MenuLink;
