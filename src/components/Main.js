import Menu from './Menu';
import '../styles/Main.scss';

const Main = ({ children }) => {
    return (
        <main>
            <div className='main'>
                <Menu />
                {children}
            </div>
        </main>
    );
};

export default Main;
