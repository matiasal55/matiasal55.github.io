import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Content from '../components/Content';
import FormField from '../components/FormField';
import '../styles/_contact.scss';

const Contact = () => {
    const schema = yup.object().shape({
        name: yup
            .string()
            .trim()
            .required('Por favor ingrese su nombre / Please enter your name')
            .min(5, 'Ingrese un nombre correcto / Please enter a correct name')
            .matches(/[a-zA-Z]/g, 'Ingrese un nombre correcto / Please enter a correct name'),
        company: yup.string().trim(),
        telphone: yup.string().trim(),
        email: yup
            .string()
            .required('Por favor ingrese su email / Please enter your email')
            .email("El formato del email no es correcto / It's not an email")
            .trim(),
        message: yup
            .string()
            .required('Ingrese su mensaje / Please enter your message')
            .min(10, 'El mensaje debe tener al menos 10 caracteres / Your message must have more than 10 characters'),
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const [send, setSend] = useState(false);

    const onSubmit = (e) => {
        setSend(true);
    };

    if (send)
        return (
            <Content page='contact'>
                <h2 className='thanks'>Muchas gracias por enviar su mensaje. En breve será leído y en caso de ser necesario respondido.</h2>
                <h2 className='thanks'>Thank you so much for send me a message. It will be read shortly and if necessary answered.</h2>
            </Content>
        );

    return (
        <Content page='contact'>
            <div>
                <h2>Contacto / Contact:</h2>
                <p>
                    Puedes contactarme haciendo click <a href='mailto:mati.alarcon55@gmail.com'>aquí</a> o completando el siguiente formulario:
                </p>
                <p>
                    If you would like contact me, please make click <a href='mailto:mati.alarcon55@gmail.com'>here</a> or complete the next form:
                </p>
                <form method='POST' onSubmit={handleSubmit(onSubmit)}>
                    <FormField
                        labelFor='name'
                        labelName='Nombre / Name:'
                        placeholder='Ingrese su nombre / Enter your name'
                        register={register}
                        errors={errors}
                    />
                    <FormField
                        labelFor='company'
                        labelName='Empresa / Company:'
                        placeholder='Opcional / Optional'
                        required={false}
                        register={register}
                        errors={errors}
                    />
                    <FormField
                        labelFor='telphone'
                        labelName='Teléfono / Phone:'
                        placeholder='Opcional / Optional'
                        type='tel'
                        register={register}
                        required={false}
                        errors={errors}
                    />
                    <FormField
                        labelFor='email'
                        labelName='Email:'
                        placeholder='Ingrese su email / Enter your email'
                        type='email'
                        register={register}
                        errors={errors}
                    />
                    <div className='form-group'>
                        <label htmlFor='message'>Mensaje / Message:</label>
                        <textarea {...register('message', { required: true })} placeholder='Ingrese su mensaje / Enter yout message' />
                        {errors['message'] ? <div className='error'>{errors['message'].message}</div> : null}
                    </div>
                    <div className='form-group'>
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
            </div>
        </Content>
    );
};

export default Contact;
