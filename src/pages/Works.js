import Content from '../components/Content';
import Card from '../components/WorkCard';
import workList from '../components/works.json';
import '../styles/_works.scss';

const Works = () => {
    return (
        <Content page='works'>
            <h2>Trabajos</h2>
            <h2>
                <i>Works</i>
            </h2>
            <p>Lista de proyectos realizados, tanto personales como para terceros.</p>
            <p>
                <i>List of projects made. There are personal and for third parties</i>
            </p>
            <div className='works-cards'>
                {workList.map((work) => (
                    <Card data={work} />
                ))}
            </div>
        </Content>
    );
};

export default Works;
