import Babel from './Knowledge/Technologies/Babel';
import Bootstrap from './Knowledge/Technologies/Bootstrap';
import Bulma from './Knowledge/Technologies/Bulma';
import CSS3 from './Knowledge/Technologies/CSS3';
import Express from './Knowledge/Technologies/Express';
import Html from './Knowledge/Technologies/Html';
import Java from './Knowledge/Technologies/Java';
import Javascript from './Knowledge/Technologies/Javascript';
import MongoDB from './Knowledge/Technologies/MongoDB';
import MySQL from './Knowledge/Technologies/MySQL';
import Node from './Knowledge/Technologies/Node';
import React from './Knowledge/Technologies/React';
import Sass from './Knowledge/Technologies/Sass';
import Webpack from './Knowledge/Technologies/Webpack';

const TechUsed = ({ tech }) => {
    switch (tech.toLowerCase()) {
        case 'babel':
            return <Babel />;
        case 'bootstrap':
            return <Bootstrap />;
        case 'bulma':
            return <Bulma />;
        case 'css3':
            return <CSS3 />;
        case 'express':
            return <Express />;
        case 'html':
            return <Html />;
        case 'java':
            return <Java />;
        case 'javascript':
            return <Javascript />;
        case 'mongodb':
            return <MongoDB />;
        case 'mysql':
            return <MySQL />;
        case 'node':
            return <Node />;
        case 'react':
            return <React />;
        case 'sass':
            return <Sass />;
        case 'webpack':
            return <Webpack />;
        default:
            return null;
    }
};

export default TechUsed;
