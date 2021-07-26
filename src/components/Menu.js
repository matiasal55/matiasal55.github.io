import { useState } from 'react';
import '../styles/_menu.scss';
import MenuLink from './MenuLink';

const Menu = () => {
    const [language, setLanguage] = useState('ENG');
    const [english, setEnglish] = useState(false);

    const changeLanguage = () => {
        if (language === 'ENG') {
            setLanguage('ESP');
            setEnglish(true);
        } else {
            setLanguage('ENG');
            setEnglish(false);
        }
    };

    return (
        <div className='menu'>
            <h1>Matias Alarcón</h1>
            <ul>
                <MenuLink path='/about' esp='Acerca de mí' eng='About' setEnglish={english} />
                <MenuLink path='/works' esp='Trabajos' eng='Works' setEnglish={english} />
                <MenuLink path='/contact' esp='Contacto' eng='Contact Me' setEnglish={english} />
            </ul>
            <div className='language' onClick={changeLanguage}>
                {language}
            </div>
        </div>
    );
};

export default Menu;
