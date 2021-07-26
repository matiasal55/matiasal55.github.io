import { useState } from 'react';
import '../styles/_menu.scss';
import ExternalLinks from './ExternalLinks';
import MenuLink from './MenuLink';

const Menu = () => {
    const msgEng = 'Touch for ENG';
    const msgEsp = 'Pulse para ESP';
    const [language, setLanguage] = useState(msgEng);
    const [english, setEnglish] = useState(false);

    const changeLanguage = () => {
        if (language.includes('ENG')) {
            setLanguage(msgEsp);
            setEnglish(true);
        } else {
            setLanguage(msgEng);
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
            <ExternalLinks />
        </div>
    );
};

export default Menu;
