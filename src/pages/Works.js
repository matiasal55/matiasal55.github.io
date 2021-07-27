import Content from '../components/Content';
import Card from '../components/WorkCard';
import '../styles/_works.scss';

const Works = () => {
    const loremCard = {
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum',
        img: 'https://picsum.photos/300/200',
        web: 'https://picsum.photos',
    };

    return (
        <Content page='works'>
            <h2>Trabajos / Works</h2>
            <p>Trabajos realizados, tanto proyectos propios como los realizados para terceros.</p>
            <div className='works-cards'>
                <Card data={loremCard} />
            </div>
        </Content>
    );
};

export default Works;
