const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMail = async ({ from, to, subject, text, html }) => {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    let info = await transporter.sendMail({
        from: `FileDrop <${from}>`,
        to: to,
        subject: subject,
        text: text,
        html: html,
    });

    console.log(info);
    console.log("Message sent: %s", info.messageId);
};

module.exports = sendMail;
