require('dotenv').config();

module.exports = {
    user: process.env.REACT_APP_EMAIL_USER,
    password: process.env.REACT_APP_EMAIL_PASSWORD,
    host: process.env.REACT_APP_EMAIL_HOST,
};
