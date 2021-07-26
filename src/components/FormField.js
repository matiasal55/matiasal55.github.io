import React from 'react';

const FormField = ({ labelFor, labelName, placeholder, type = 'text', register, required = true }) => {
    return (
        <div className='form-group'>
            <label htmlFor={labelFor}>{labelName}</label>
            <input id={labelFor} type={type} placeholder={placeholder} {...register(labelFor, { required })} />
        </div>
    );
};

export default FormField;
