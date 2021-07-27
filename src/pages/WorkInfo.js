import { useParams } from 'react-router-dom';
import Content from '../components/Content';
import React from '../components/Knowledge/Technologies/React';
import TechUsed from '../components/TechUsed';
import '../styles/_works-info.scss';

const WorkInfo = () => {
    const { page } = useParams();

    const data = {
        title: 'Lorem Ipsum',
        description:
            'Ipsum culpa aliqua labore dolor do dolore. Sunt ullamco commodo laborum Lorem est consectetur anim ipsum magna anim. Tempor dolore dolore sit ullamco non ea. Lorem adipisicing pariatur in reprehenderit irure adipisicing nulla ipsum culpa non pariatur eu irure.',
        img: 'https://picsum.photos/300/200',
        web: 'https://picsum.photos',
        tech: ['React', 'Bulma', 'MongoDB'],
    };

    return (
        <Content page='work-info'>
            <h2>{data.title}</h2>
            <div className='work-info-img'>
                <img src={data.img} alt={data.title} />
            </div>
            <p>
                Web:{' '}
                <a href={data.web} target='_blank' rel='noreferrer'>
                    {data.web}
                </a>
            </p>
            <div className='button'>
                <a href={data.web} target='_blank' rel='noreferrer'>
                    Visitar / Visit
                </a>
            </div>
            <p>{data.description}</p>
            <div className='eng'>
                <p>{data.description}</p>
            </div>
            <div>
                <h3>Tecnologías usadas / Tools used:</h3>
                <div className='work-info-tech'>
                    {data.tech.map((name) => (
                        <TechUsed tech={name} />
                    ))}
                </div>
            </div>
        </Content>
    );
};

export default WorkInfo;
