import { Link } from 'react-router-dom';

const MenuLink = ({ path, esp, eng }) => {
    return (
        <Link to={path}>
            <li>{esp}</li>
        </Link>
    );
};

export default MenuLink;
