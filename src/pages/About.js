import Content from '../components/Content';
import picture from '../assets/profile.jpg';
import '../styles/_about.scss';
import Knowledge from '../components/Knowledge';

const About = () => {
    return (
        <Content page='about'>
            <div className='information'>
                <h2>Acerca de mí</h2>
                <img className='picture-about' src={picture} alt='me' />
                <p>Hola. Me llamo Matias. Soy un desarrollador web radicado en Buenos Aires, Argentina.</p>
                <p>
                    Realizo proyectos en diversos lenguajes y con distintas herramientas, siendo MERN el stack principal. Siempre dispuesto a aprender cosas
                    nuevas, de manera de cumplir con el trabajo deseado.
                </p>
                <p>
                    Estoy realizando la Tecnicatura en Desarrollo Web y paralelamente aprendo cosas por mi cuenta y desarrollo proyectos propios y para
                    terceros. Me gusta viajar, fotografiar y aprender constantemente y actualizarme acerca de las nuevas tecnologías que aparecen vinculadas al
                    desarrollo web.
                </p>
            </div>
            <div className='services'>
                <h2>Servicios</h2>
                <ul>
                    <li>Desarrollo de sitio web personal o empresarial</li>
                    <li>Frontend - Backend</li>
                    <li>Landing Page</li>
                    <li>API</li>
                    <li>Responsive Design</li>
                    <li>Diseño de sitio web</li>
                    <li>PSD a HTML</li>
                </ul>
            </div>
            <div className='information eng'>
                <h2>About</h2>
                <p>Hi! I'm Matias. I'm a web developer from Buenos Aires, Argentina.</p>
                <p>
                    I make projects with different languages and technologies, with MERN being my main stack. I'm always willing to learn, for satisfy the
                    desired work.
                </p>
                <p>
                    I'm studying Web Development Technique and parallel I'm learning on my own and develop own projects and for thir parties. I like travel,
                    take pictures and learn constantly y update my knowledge with new technologies related with web development.
                </p>
            </div>
            <div className='services eng'>
                <h2>Services</h2>
                <ul>
                    <li>Business or Personal Website development</li>
                    <li>Frontend - Backend</li>
                    <li>Landing Page</li>
                    <li>API</li>
                    <li>Responsive Design</li>
                    <li>Website Design</li>
                    <li>PSD to HTML</li>
                </ul>
            </div>
            <Knowledge />
        </Content>
    );
};

export default About;
