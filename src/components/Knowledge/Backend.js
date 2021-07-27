import Node from './Technologies/Node';
import Express from './Technologies/Express';
import Java from './Technologies/Java';

const Backend = ({ fill = '#fff' }) => {
    return (
        <div>
            <h3>Backend:</h3>
            <div className='icons'>
                <Node fill={fill} />
                <Express fill={fill} />
                <Java fill={fill} />
            </div>
        </div>
    );
};

export default Backend;
