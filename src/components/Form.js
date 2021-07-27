import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormField from './FormField';
import Captcha from './Captcha';
import Thanks from './Thanks';
import { sendEmail } from '../utils/email';
import TextArea from './TextArea';
import { schema } from '../utils/formValidate';

const Form = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const [send, setSend] = useState(false);
    const [captcha, setCaptcha] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [enableButton, setEnableButton] = useState(true);

    const onSubmit = async (data) => {
        if (!captcha) {
            setErrorMsg('Debe validar el captcha / Must validate the captcha');
            return false;
        }
        setEnableButton(false);
        const send = await sendEmail(data);
        if (send) {
            setSend(true);
        } else {
            setSend(false);
            setEnableButton(true);
            setErrorMsg(
                "No se pudo enviar el mensaje. Les pedimos disculpas. Por favor intentar más adelante / The message can't be sent. Please try later. I'm sorry."
            );
        }
    };

    if (send) return <Thanks />;

    return (
        <>
            <form method='POST' onSubmit={handleSubmit(onSubmit)}>
                <FormField labelFor='name' labelName='Nombre / Name:' placeholder='Ingrese su nombre / Enter your name' register={register} errors={errors} />
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
                <TextArea register={register} errors={errors} />
                <Captcha onChange={() => setCaptcha(true)} />
                <div className='form-group'>
                    <button type='submit' disabled={!enableButton}>
                        {enableButton ? 'Enviar' : 'Enviando...'}
                    </button>
                </div>
            </form>
            <div className='error'>{errorMsg}</div>
        </>
    );
};

export default Form;
