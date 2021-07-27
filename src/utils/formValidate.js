import * as yup from 'yup';

export const schema = yup.object().shape({
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
