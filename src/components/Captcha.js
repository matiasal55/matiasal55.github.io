import ReCAPTCHA from 'react-google-recaptcha';
import { captchaID } from '../utils/dotenv';

const Captcha = ({ onChange, onErrored, onExpired }) => {
    return (
        <div className='captcha'>
            <ReCAPTCHA sitekey={captchaID} onChange={onChange} onErrored={onErrored} onExpired={onExpired} size='compact' />
        </div>
    );
};

export default Captcha;
