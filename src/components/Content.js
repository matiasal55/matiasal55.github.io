import { Link } from 'react-router-dom';
import '../styles/_content.scss';

const Content = ({ children }) => {
    return (
        <div className='content'>
            <div className='close'>
                <Link to='/'>CERRAR</Link>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default Content;
