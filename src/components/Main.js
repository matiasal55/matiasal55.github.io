import { Link } from 'react-router-dom';
import '../styles/Main.scss';

const Main = () => {
    return (
        <main>
            <div className='main'>
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
                <div className='picture'></div>
            </div>
        </main>
    );
};

export default Main;
