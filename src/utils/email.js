import emailjs from 'emailjs-com';
import { serviceID, templateID, userID } from './dotenv';

export const sendEmail = async (data) => {
    try {
        const send = await emailjs.send(serviceID, templateID, data, userID);
        return true;
    } catch (e) {
        return false;
    }
};
