import '../styles/_form-field.scss';

const FormField = ({ labelFor, labelName, placeholder, type = 'text', register, required = true, errors }) => {
    return (
        <div className='form-group'>
            <label htmlFor={labelFor}>{labelName}</label>
            <input id={labelFor} type={type} placeholder={placeholder} {...register(labelFor, { required })} />
            {errors[labelFor] ? <div className='error'>{errors[labelFor].message}</div> : null}
        </div>
    );
};

export default FormField;
