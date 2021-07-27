require('dotenv').config();

module.exports = {
    serviceID: process.env.REACT_APP_EMAIL_SERVICE_ID,
    templateID: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
    userID: process.env.REACT_APP_EMAIL_USERID,
    captchaID: process.env.REACT_APP_CAPTCHA_KEY,
};
