import { Link } from 'react-router-dom';
import '../styles/_content.scss';

const Content = ({ children, page }) => {
    return (
        <div className={'content ' + page}>
            <div className='close'>
                <Link to='/'>CERRAR</Link>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default Content;
