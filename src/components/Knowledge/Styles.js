import Bootstrap from './Technologies/Bootstrap';
import Bulma from './Technologies/Bulma';
import CSS3 from './Technologies/CSS3';
import Sass from './Technologies/Sass';

const Styles = ({ fill = '#fff' }) => {
    return (
        <div>
            <h3>Styles:</h3>
            <div className='icons'>
                <Bootstrap fill={fill} />
                <Bulma fill={fill} />
                <CSS3 fill={fill} />
                <Sass fill={fill} />
            </div>
        </div>
    );
};

export default Styles;
