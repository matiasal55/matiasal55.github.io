import Webpack from './Technologies/Webpack';
import Babel from './Technologies/Babel';
import Html from './Technologies/Html';
import Javascript from './Technologies/Javascript';
import React from './Technologies/React';

const Frontend = ({ fill = '#fff' }) => {
    return (
        <div>
            <h3>Frontend:</h3>
            <div className='icons'>
                <Javascript fill={fill} />
                <React fill={fill} />
                <Html fill={fill} />
                <Webpack fill={fill} />
                <Babel fill={fill} />
            </div>
        </div>
    );
};

export default Frontend;
