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
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/works'>
                    <li>Works</li>
                </Link>
                <Link to='/contact'>
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    );
};

export default Menu;
