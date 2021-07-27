import ErrorMsg from './ErrorMsg';

const TextArea = ({ register, errors }) => {
    return (
        <div className='form-group'>
            <label htmlFor='message'>Mensaje / Message:</label>
            <textarea {...register('message', { required: true })} placeholder='Ingrese su mensaje / Enter your message' />
            <ErrorMsg error={errors['message']} />
        </div>
    );
};

export default TextArea;
