import ReCAPTCHA from 'react-google-recaptcha';
import { captchaID } from '../utils/dotenv';

const Captcha = ({ onChange }) => {
    return (
        <div className='captcha'>
            <ReCAPTCHA sitekey={captchaID} onChange={onChange} />
        </div>
    );
};

export default Captcha;
