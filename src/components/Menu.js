import '../styles/_menu.scss';
import MenuLink from './MenuLink';

const Menu = () => {
    return (
        <div className='menu'>
            <h1>Matias Alarcón</h1>
            <ul>
                <MenuLink path='/about' esp='Acerca de mí' eng='About' />
                <MenuLink path='/works' esp='Trabajos' eng='Works' />
                <MenuLink path='/contact' esp='Contacto' eng='Contact Me' />
            </ul>
        </div>
    );
};

export default Menu;
