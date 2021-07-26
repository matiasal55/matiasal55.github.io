import { useForm } from 'react-hook-form';
import Content from '../components/Content';
import FormField from '../components/FormField';
import '../styles/_contact.scss';

const Contact = () => {
    const { handleSubmit, register } = useForm();

    const onSubmit = (e) => {
        console.log(e);
    };

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
                    <FormField labelFor='name' labelName='Nombre / Name:' placeholder='Ingrese su nombre / Enter your name' register={register} />
                    <FormField
                        labelFor='telephone'
                        labelName='Teléfono / Phone:'
                        placeholder='Ingrese su teléfono con código de area / Enter your phone with area code'
                        type='tel'
                        register={register}
                    />
                    <FormField labelFor='email' labelName='Email:' placeholder='Ingrese su email / Enter your email' type='email' register={register} />
                    <div className='form-group'>
                        <label htmlFor='message'>Mensaje / Message:</label>
                        <textarea {...register('message')}></textarea>
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
