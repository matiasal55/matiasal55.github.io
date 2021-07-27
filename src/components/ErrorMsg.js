import React from 'react';

const ErrorMsg = ({ error }) => {
    if (error) return <div className='error'>{error.message}</div>;
    return null;
};

export default ErrorMsg;
