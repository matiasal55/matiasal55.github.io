import { Link } from 'react-router-dom';
import '../styles/_menu.scss';

const Menu = () => {
    return (
        <div className='menu'>
            <h1>Matias Alarcón</h1>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/'>
                    <li>About</li>
                </Link>
                <Link to='/'>
                    <li>Works</li>
                </Link>
                <Link to='/'>
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    );
};

export default Menu;
