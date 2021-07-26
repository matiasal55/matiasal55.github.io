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
                <p>Hola. Me llamo Matias, tengo 30 años y soy de Buenos Aires, Argentina.</p>
                <p>
                    Me especializo en el stack MERN (MongoDB - Express - ReactJS - NodeJS) y tengo conocimientos intermedios y trabajos realizados con Java y
                    PHP.
                </p>
                <p>
                    Estoy realizando la Tecnicatura en Desarrollo Web y paralelamente aprendo cosas por mi cuenta y desarrollo proyectos propios y para
                    terceros.
                </p>
            </div>
            <div className='information'>
                <h2>About</h2>
                <p>Hi! I'm Matias. I'm 30 years old and I'm from Buenos Aires, Argentina.</p>
                <p>I specialize in MERN Stack and I have middle knowledge and work done with Java and PHP.</p>
                <p>I'm studying Web Development Technique and parallel I'm learning on my own and develop own projects and for thir parties.</p>
            </div>
            <Knowledge />
        </Content>
    );
};

export default About;
