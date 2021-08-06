import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_works-cards.scss';

const WorkCard = ({ data }) => {
    const [active, setActive] = useState(false);

    const handleEnter = () => setActive(true);
    const handleLeave = () => setActive(false);

    return (
        <Link to={`/works/${data.url}`}>
            <div className='work-card' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <div className='work-card-img'>
                    <img src={data.img} alt={data.title} />
                </div>
                <div className={`work-card-info ${active ? 'active' : ''}`}>
                    <h3>{data.title}</h3>
                </div>
            </div>
        </Link>
    );
};

export default WorkCard;
