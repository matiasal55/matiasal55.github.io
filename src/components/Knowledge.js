import '../styles/_knowledge.scss';
import Backend from './Knowledge/Backend';
import Database from './Knowledge/Database';
import Frontend from './Knowledge/Frontend';
import Styles from './Knowledge/Styles';

const Knowledge = () => {
    const fill = '#fff';

    return (
        <div className='knowledge'>
            <h2>Tecnologías</h2>
            <h2>
                <i>Knowledge</i>
            </h2>
            <div>
                <Frontend fill={fill} />
                <Backend fill={fill} />
                <Styles fill={fill} />
                <Database fill={fill} />
            </div>
        </div>
    );
};

export default Knowledge;
