import '../styles/_form-field.scss';
import ErrorMsg from './ErrorMsg';

const FormField = ({ labelFor, labelName, placeholder, type = 'text', register, required = true, errors }) => {
    return (
        <div className='form-group'>
            <label htmlFor={labelFor}>{labelName}</label>
            <input id={labelFor} type={type} placeholder={placeholder} {...register(labelFor, { required })} />
            <ErrorMsg error={errors[labelFor]} />
        </div>
    );
};

export default FormField;
