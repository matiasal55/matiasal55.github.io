import Content from '../components/Content';
import '../styles/_contact.scss';
import Form from '../components/Form';

const Contact = () => {
    return (
        <Content page='contact'>
            <div>
                <h2>Contacto / Contact:</h2>
                <p>
                    Podés contactarme haciendo click <a href='mailto:mati.alarcon55@gmail.com'>aquí</a>. También podés agregarme a tu red en
                    <a href='https://www.linkedin.com/in/matiasalarcon'> Linkedin</a> o podés completar el siguiente formulario:
                </p>
                <p>
                    If you would like contact me, please make click <a href='mailto:mati.alarcon55@gmail.com'>here</a>. Also you can add me to your network
                    contact in <a href='https://www.linkedin.com/in/matiasalarcon'>Linkedin</a> or you can complete the next form:
                </p>
                <Form />
            </div>
        </Content>
    );
};

export default Contact;
