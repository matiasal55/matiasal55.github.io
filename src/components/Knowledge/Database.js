import MySQL from './Technologies/MySQL';
import MongoDB from './Technologies/MongoDB';

const Database = ({ fill = '#fff' }) => {
    return (
        <div>
            <h3>Databases:</h3>
            <div className='icons'>
                <MySQL fill={fill} />
                <MongoDB fill={fill} />
            </div>
        </div>
    );
};

export default Database;
